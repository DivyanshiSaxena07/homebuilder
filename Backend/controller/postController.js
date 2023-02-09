import { Post } from "../model/postModel.js"

export const create=async(request,response,next)=>{
      
        console.log(request.file.filename);
        console.log(request.body);
        request.body.userId =request.body.user;
        request.body.plotSize =Number(request.body.plotSize);
        request.body.floor =Number(request.body.floors);
        request.body.price =Number(request.body.price);
        request.body.postImage = request.file.filename;
    const result =await Post.create(request.body);
    return response.status(200).json({result:result,message:"Post Created"});   
}

export const list = async(request,response,next)=>{
    const result = await Post.find().populate({path:"userId"}).populate({path:"comment.userId"});
    console.log(result);
    return response.status(200).json({result,message:"Data Got"});
}