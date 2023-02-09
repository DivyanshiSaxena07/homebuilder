import express from "express";
import { postComment } from "../controller/commentController.js";

const Router = express.Router();

Router.post("/post",postComment);

export default Router;

