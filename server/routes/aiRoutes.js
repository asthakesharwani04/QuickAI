import express from "express";
import { auth } from "../middlewares/auth.js";
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from "../controllers/aiController.js";
import { upload } from "../configs/multer.js";

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle)
aiRouter.post('/generate-blog-title', auth, generateBlogTitle)
aiRouter.post('/generate-image', auth, generateImage)

// Add this to your aiRoutes.js for testing
aiRouter.post('/test-upload', upload.single('image'), (req, res) => {
    console.log('File received:', req.file);
    res.json({ 
        success: true, 
        file: req.file ? 'File received' : 'No file received' 
    });
});
aiRouter.post('/remove-image-background', upload.single('image'), auth, removeImageBackground)

aiRouter.post('/remove-image-object', upload.single('image'), auth, removeImageObject)

aiRouter.post('/resume-review', upload.single('resume'), auth, resumeReview)

export default aiRouter