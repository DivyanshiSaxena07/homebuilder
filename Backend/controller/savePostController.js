import { Post } from "../model/postModel.js";
import { Saved } from "../model/savePostModel.js";
// import { Category } from "../model/category.model.js";

// export const deletepost = async (req, res, next) => {
//     const postIndex = req.params.index;
//     const user_Id = req.session.userId;
//     let cartItems = await Cart.findOne({ userId: user_Id });
//     cartItems.postList.splice(postIndex * 1, 1);
//     await Saved.create(cartItems);
//     res.redirect("/cart/");
// }
export const savedPost = async (request,response,next)=>{
    let post = await Post.findById(request.body.postId);
    console.log("Saved post called");
    console.log(request.body._id)
    let currentUserId = request.body.userId;
    console.log(currentUserId)
    let user  = await Saved.findOne({userId: currentUserId});
    if(user){
      let index = 0;
      for( ; index<user.postList.length; index++){
        if(user.postList[index].postId == request.body.postId){
            console.log("Alread added...");
            return response.status(200).json({message: 'Alread added'});
        }
      }
      if(index == user.postList.length){
           user.postList.push({
            postId: post._id,
            postName: post.postName,
            postImage: post.postImage
          });
          let status = await Saved.create(user);
          return response.status(200).json({message: 'Successfully added in cart'}); 
      }   
    }
    else{
        let result = await Saved.create({
            userId: currentUserId,
            postList:[{
                postId: post,
                postName: request.body.postName,
                postImage: request.body.postImage
              }
            ]
        })
        console.log(result);
        console.log(request.body.postName);
        let status = await Saved.create(result);

        return response.status(200).json({result:result,message: 'Successfully added in cart'});
    }
}
//--------Showing data in Cart-----------//
// export const cart = async (req, res, next) => {
//     let user_Id = req.body.userId;
//     let items = await Saved.findOne({ userId: user_Id })
//     let categories = await Category.find();
//     return res.render("user/cart.ejs", {
//         cartList: items.postList,
//         currentUser: req.body,
//         categoryList: categories
//     });
// }

export const cartList = async (req, res, next) => {

    let userId = req.body.userId;
    console.log(req.body.userId)
    let cartItems = await Saved.findOne(req.body.userId)
    let items = [];
    console.log(cartItems)
    if (cartItems) {
        for (let i = 0; i < cartItems.postList.length; i++) {
            let item = cartItems.postList[i].toJSON();
            item.quantity = 1;
            items.push(item);
        }
        return res.status(200).json({ items: items });
    }
    else
    return res.status(200).json({ items});
}

