import mongoose from "mongoose";


const CommentSchema= new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    pin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pin",
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps:true});

const Comment= mongoose.model('Comment',CommentSchema);

export default Comment;