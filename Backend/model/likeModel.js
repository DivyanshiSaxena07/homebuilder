import mongoose from 'mongoose';
const likeSchema=new mongoose.Schema({
    like:{
        type:Number
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    }
})
export const Like=mongoose.model('like',likeSchema);