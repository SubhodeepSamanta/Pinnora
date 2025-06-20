import express from 'express'
import userRouter from './routes/user.route.js';
import pinRouter from './routes/pin.route.js';
import commentRouter from './routes/comment.route.js';
import boardRouter from './routes/board.route.js';
import connectDB from './utils/connectDB.js';
import  cors from 'cors'

const app= express();
const PORT=process.env.PORT;
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use('/users', userRouter );
app.use('/pins', pinRouter );
app.use('/comments', commentRouter );
app.use('/boards', boardRouter );

app.listen(PORT,()=>{ 
    connectDB();
    console.log(`Server is running on port: ${PORT}`);
});