import express from 'express';
import { signout, signup, userLogin } from '../controller/userController.js';
import {body} from 'express-validator';
const router=express.Router();
router.post('/login',userLogin);
router.post("/signup",body('email','email is required').notEmpty(),body('password','password is required').notEmpty(),signup)
router.post("/signout",signout);
export default router;