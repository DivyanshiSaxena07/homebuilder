import { Like } from "../model/likeModel.js";
import {Post} from "../model/postModel.js";
export const like=(req,res,next)=>{
        

    let id=req.body.id;
    let postData=Post.findByIdAndUpdate(id,{like:req.body.count},(err,result)=>{
       if(err)
       console.log(err);
       else
       console.log("finalj:"+result);

    });
    console.log(postData);

}