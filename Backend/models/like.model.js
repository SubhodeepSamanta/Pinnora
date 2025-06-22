import mongoose from "mongoose";


const likeSchema= new mongoose.Schema({
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

const Like= mongoose.model('Like',likeSchema);

export default Like;