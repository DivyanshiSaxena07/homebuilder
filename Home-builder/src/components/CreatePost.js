import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./css/createPostStyle.css";
import Header from "./Header";
import img from "./img/about-vision.jpg";
import WebApi from './services/WebApi';
import WebServices from './services/WebServices';
import { addPost } from './Slices/postSlice';
const CreatePost = () => {
  let navigate = useNavigate();
  let [fileName,setFileName] = useState("");
const [plotSize,setPlotSize] = useState("");
const [floors,setFloors] = useState("");
const [price,setPrice] = useState("");
const [location,setLocation] = useState("");
const [description,setDescription] = useState("");
const {customer} = useSelector((state)=>state.User.value);
// console.log("customer");
// console.log(customer);
let dispatch=useDispatch();
const saveData = async ()=>{
 
// console.log(fileName);

  let formData = new FormData();
  formData.append("postImage",fileName);
  formData.set("plotSize",plotSize);
  formData.set("floors", floors);
  formData.set("price",price);
  formData.set("location", location);
  formData.set("description", description);
  alert(customer._id);
  formData.set("userId", customer._id);

  console.log(formData);

  const response  = await WebServices.postApi(WebApi.ADD_POST,formData);
  dispatch(addPost(response.data.result));
  alert(response.data.message);
  navigate("/home",response);
}
const onFileChange = (event)=>{
  setFileName(event.target.files[0]);
  // console.log(fileName);
}
  return (
    <div>
      
  <div className="postContainer">
    <div className="postWelcome">
     <img src={img} style={{height:"100vh",width:"100%"}}/>
    </div>
    <div className="sign-up">
      <h1 className='mb-5'>Create Post</h1>
      <form  name="sign-up-form" noValidate>
        <div className="postBox">
        <input className="form-styling input-group-append text-black" onChange={onFileChange} type="file" />
        <input type="Number" className="form-styling margin-top-sm text-black" placeholder="PlotSize" onChange={(event)=>{setPlotSize(event.target.value)}} />
        <input type="Number" className="form-styling margin-top-sm text-black" placeholder="Floors" onChange={(event)=>{setFloors(event.target.value)}} />
          <input type="number" className="form-styling margin-top-sm text-black" placeholder="Price" onChange={(event)=>{setPrice(event.target.value)}} />
          <input type="text" className="form-styling margin-top-sm text-black" placeholder="Location" onChange={(event)=>{setLocation(event.target.value)}}/>
         <textarea rows={1} className="form-styling margin-top-sm text-black" placeholder="Description" onChange={(event)=>{setDescription(event.target.value)}}/>
         <button type="button" onClick={saveData} className='btn btn-block btn-outline-success  margin-top-sm'>Post</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default CreatePost
