import mongoose from "mongoose";


const FollowSchema= new mongoose.Schema({
    follower:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    following:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pin",
        required: true
    }
},{timestamps:true});

const Follow= mongoose.model('Follow',FollowSchema);

export default Follow;