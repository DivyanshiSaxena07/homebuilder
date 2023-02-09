import { Post } from "../model/postModel.js";

export const postComment = async(req,res,next)=>{
    console.log("Post Controller started From here........ ");
    console.log(req.body);
    let comment = req.body.comment;
    let item = req.body.item;
    let userid = req.body.item.userId._id;
    console.log("Comment"+comment);
    console.log(item._id);
    console.log(userid);
    console.log("Post Controller end here......... ");
    
    

     let postdata = await Post.findById(item._id);
     console.log("comment will be display here");
     let com = postdata.comment;
    
     console.log(com);
    
  com.push({comment,userId:userid});
      await Post.updateOne({_id:postdata._id},{$set:{comment:com}});
      
     
      postdata = await Post.findById(item._id);
      console.log(postdata)
     














    // let postData= await Post.findByIdAndUpdate(item._id,{comment:arr},(err,result)=>{
    //     if(err){
    //         console.log(err,"Error aagyi hai");
    //     }
    //     else{
    //         console.log(result);
    //     }

    // })

    // console.log(postData);
    
    // let id=req.body.id;
    //    if(err)
    //    console.log(err);
    //    else
    //    console.log("finalj:"+result);

    // });
    // console.log(postData);
}