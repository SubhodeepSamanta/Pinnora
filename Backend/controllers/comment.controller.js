import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";


export const getComments= async (req,res)=>{
    const {postId}= req.params;
    const comments= await Comment.find({pin: postId}).populate("user","username displayName img").sort({createdAt: -1});
    res.status(200).send(comments);
}