import express from 'express'
import userRouter from './routes/user.route.js';
import pinRouter from './routes/pin.route.js';
import commentRouter from './routes/comment.route.js';
import boardRouter from './routes/board.route.js';

const app= express();
const PORT=process.env.PORT;

app.use('/users', userRouter );
app.use('/pins', pinRouter );
app.use('/comments', commentRouter );
app.use('/boards', boardRouter );

app.listen(PORT,()=>{ 
    console.log(`Server is running on port: ${PORT}`);
});