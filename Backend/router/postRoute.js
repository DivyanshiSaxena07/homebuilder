import express from 'express';
import { create,list } from '../controller/postController.js';
import multer from 'multer';
const upload =  multer({dest:"public/postImages"})
const router=express.Router();

// router.route("/save");
// .get(savePost)
// .post(upload.single('postImage'),savePost);
// // router.get('/save',savePost)
router.post("/create",upload.single("postImage"),create);
router.get("/list",list);
export default router;