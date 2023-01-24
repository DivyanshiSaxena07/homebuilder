import { Like } from "../model/likeModel.js";

export const like=(req,res,next)=>{
    Like.create(req)
    .then(result=>{
        return res.json({result:result,status:true})
    })
    .catch(err=>{
        console.log(err);
    })
    console.log("hisaodio");
}