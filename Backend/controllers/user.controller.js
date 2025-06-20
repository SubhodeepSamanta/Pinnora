import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Follow from "../models/follows.model.js";

export const registerUser= async (req,res)=>{
    const {username, name, email, password}= req.body;
    if(!username || !name || !email || !password) return res.status(400).send('All fields are required');
    const user= await User.findOne({username});
    if(user) return res.status(401).send('Username already taken');

    const hashedPassword= await bcrypt.hash(password,10);
    const newUser= await User.create({
        username,
        displayName: name,
        email,
        hashedPassword
    })

    const token=jwt.sign({userId: newUser._id},process.env.JWT_SECRET);
    res.cookie("token",token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 *7 
    })

    const {hashedPassword: pass, ...detailsWithoutPassword}= newUser.toObject();
    res.status(201).send(detailsWithoutPassword);
}

export const loginUser= async (req,res)=>{
    const {email , password}= req.body;
    if(!email || !password) return res.status(400).send('All fields are required');
    const user= await User.findOne({email});
    if(!user) return res.status(404).send('User and Password Invalid');
    const hashedPassword= await bcrypt.compare(password,user.hashedPassword);
    if(!hashedPassword) return res.status(404).send('User and Password Invalid');
    const {hashedPassword: pass, ...detailsWithoutPassword}= user.toObject();
    const token=jwt.sign({userId: user._id},process.env.JWT_SECRET);
    res.cookie("token",token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 
    })
    res.status(200).send(detailsWithoutPassword);
}

export const logoutUser= async (req,res)=>{
    res.clearCookie("token");
    res.status(200).send('Logout Successful');
}

export const getUser= async(req,res)=>{
    const {username}= req.params;
    const user= await User.findOne({username});
    const {hashedPassword, ...detailsWithoutPassword}= user.toObject();
    const followingCount= await Follow.countDocuments({followers: user._id});
    const followerCount= await Follow.countDocuments({following: user._id});
    const token= req.cookies.token;
        if(!token){
            res.status(200).json({
                ...detailsWithoutPassword,
                followerCount,
                followingCount,
                isFollowing: false
            })
        }else{
        jwt.verify(token, process.env.JWT_SECRET, async (err,payload)=>{
            if(!err){
                const isExists= await Follow.exists({
                    follower: payload.userId,
                    following: user._id,
                })
                res.status(200).json({
                ...detailsWithoutPassword,
                followerCount,
                followingCount,
                isFollowing: isExists ? true : false,
            })
            }
        })
    }
}

export const followUser= async(req,res)=>{
    const {username}= req.params;
    const user= await User.findOne({username});
    const isFollowing= await Follow.exists({
        follower: req.user,
        following: user._id,
    })
    if(isFollowing){
        await Follow.deleteOne({follower: req.user, following: user._id,})
    }else{
        await Follow.create({follower: req.user, following: user._id,})
    }
    res.status(200).json({message: "Successful"});
}