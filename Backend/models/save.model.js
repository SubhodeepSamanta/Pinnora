import mongoose from "mongoose";


const saveSchema= new mongoose.Schema({
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

const Save= mongoose.model('Save', saveSchema);

export default Save;