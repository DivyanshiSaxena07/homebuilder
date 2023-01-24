import { validationResult } from "express-validator";
import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";

export const userLogin = async (request, response, next) => {
  console.log(request.body);
  let user = await User.findOne({ email: request.body.email });
  console.log("user");
  console.log(user);
  if (user!=null) {
    let validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );
    if (validPassword) {
      request.body.userId = user._id;
      request.body.userEmail = user.email;
      return response.status(200).json({user:user,message:"User Found "});
      return response.json();
    }
  } else
  return response.status(201).json({user:request.body,message:"User Not Found "});
};


export const signup = async (request, response, next) => {
  //  console.log(request.body);
    const errors = validationResult(request);
  if (!errors.isEmpty()) {
    console.log(request.body);
    return response
      .status(200)
      .json({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        user:request.body.user
      });
  } else {
    let password = request.body.password;
    let saltKey = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(password, saltKey);
    let user = {
      name: request.body.name,
      email: request.body.email,
      password: encryptedPassword,
      user:request.body.user
    }
    User.create({
      name: request.body.name,
      email: request.body.email,
      password: encryptedPassword,
      user:request.body.user
    })
      .then((result) => {
        return response.status(200).json({user:user,message:"User Signed In "});
      })
      .catch((err) => {
        return response.status(200).json({ currentUser: "", brandList: [] });
      });
  }
};



export const signout = (request, response, next) => {
  request.body.userId = null;
  request.body.userEmail = null;
  return response.redirect("/user");
};
