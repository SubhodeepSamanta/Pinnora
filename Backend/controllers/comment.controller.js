import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'

export const addComment= async(req,res)=>{
    const { description, pin }= req.body;
    const user= req.user;
    const comment= await Comment.create({
        description,
        pin,
        user
    })
    res.status(201).send(comment);
}

export const getComments= async (req,res)=>{
    const {postId}= req.params;
    const comments= await Comment.find({pin: postId}).populate("user","username displayName img").sort({createdAt: -1});
    res.status(200).send(comments);
}