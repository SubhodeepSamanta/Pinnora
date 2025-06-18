import mongoose from "mongoose"


export const connectDB= async (req,res)=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`database connected on ${conn.connection.host}`);
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}