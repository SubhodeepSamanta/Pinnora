import User from "../models/user.model.js";



export const getUser= async(req,res)=>{
    const {username}= req.params;
    const user= await User.findOne({username});
    const {hashedPassword, ...detailsWithoutPassword}= user.toObject();
    res.status(200).send(detailsWithoutPassword)
}