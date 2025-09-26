import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/',(req, res) =>res.send('Server is Live!'))
// The clerkMiddleware() function checks the request's cookies and headers for a session JWT and, if found, attaches the 
// Auth
//  object to the request object under the auth key.
app.use(requireAuth())
app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)




const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})