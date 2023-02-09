import mongoose from "mongoose";
const postSchema= new mongoose.Schema({
    postSize:{
        type:String
    },
    floors:{
        type:String
    },
    price:{
        type:String
    },
    location:{
        type:String
    },
    description:{
       type:String 
    },
    postImage:{
        type:String
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
    like:{
      type:Number
    },

    
    comment:[{

            comment:{
                type:String,
                
              },

            userId:{
                type:mongoose.Schema.ObjectId,
                ref:"user"
            }
}]
})
export const Post=mongoose.model('post',postSchema);