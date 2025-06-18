import mongoose from "mongoose";


const PinSchema= new mongoose.Schema({
    media:{
        type: String,
        required: true
    },
    width:{
        type: Number,
        required: true
    },
    height:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    links:{
        type: String,
    },
    board:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Board"
    },
    tags:{
        type: [String],
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{ timestamps: true});

const Pin= mongoose.model('Pin',PinSchema);

export default Pin;