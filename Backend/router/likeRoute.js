import express from "express";
import { like } from "../controller/likeController.js";
const router=express.Router();
router.post('/post',like);
export default router;