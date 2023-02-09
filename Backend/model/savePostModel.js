import mongoose from "mongoose";
const savedPostSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    postList:[
        {
            postId:mongoose.Schema.ObjectId,
            postName: String,
            postImage: String
        }
    ]
})
export const Saved  = mongoose.model("savedPost",savedPostSchema);