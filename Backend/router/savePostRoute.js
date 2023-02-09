import express from "express";
import { cartList, savedPost } from "../controller/savePostController.js";
const router=express.Router();
router.post('/post',savedPost);
router.get('/list',cartList);
export default router;