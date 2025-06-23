import jwt from 'jsonwebtoken'
import User from "../models/user.model.js";

export const verifyToken= async (req,res,next)=>{
    const token= req.cookies.token;
    if(!token) return res.status(401).json({message: 'Not Authenticated'});
    jwt.verify(token, process.env.JWT_SECRET, (err,payload)=>{
        if(err) return res.status(403).send({message: 'token invalid'});
        req.user=payload.userId;
        console.log('token from cookie:', req.cookies.token);
        next()
    })
}