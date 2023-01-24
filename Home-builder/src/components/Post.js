import React, { useEffect, useState } from 'react';
import "./css/postStyle.css";
import {fetchPosts} from "./Slices/postSlice.js";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import "./css/like.css";
import axios from 'axios';
const Post = () => {
let [count,setCount]=useState(0);
const {posts} =  useSelector((state)=>state.Post.value);
const {customer} = useSelector((state)=>state.User.value);

console.log(customer._id);

  const Like=(e)=>{
   let a=document.getElementById("checkbox");
   if(a.checked)
   {
   
    setCount(++count)
   let response= axios.post("http://localhost:3000/like/post",{count:count}); 
   console.log(response)
   }
   if(!a.checked){
    setCount(--count);
    let response= axios.post("http://localhost:3000/like/post",{count:count}); 
   }
    console.log(a.checked);
    console.log(count);

  } 
    
  
    return (
      <main>
  <div className="myContainer">
    <div className="column-9">	
      {posts.map((item,index)=>		
      <div className="card">
        <div className="top">
          <div className="userDetails">
            <div className="profilepic">
              <div className="profile_img">
                <div className="image">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png" alt="img8" />
                </div>
              </div>
            </div>
            <h3>{item.userId.name}
              <br />
              <span>{item.location}</span>
            </h3>
          </div>

          <div>
         <span className='font-weight-bold'>
          {item.userId.user}
         </span>

          </div>
          
        </div>

        <div>
         <span className='font-weight-bold'>
          <label  className="ml-3">Price : - </label>{item.price}
         </span>
          </div>
        <div>
         <span className='font-weight-bold'>
          <label className="ml-3">Floor : - </label>{item.floors}
         </span>
          </div>
        <div>
         <span className='font-weight-bold'>
          <label className="ml-3">Description : - </label>{item.description}
         </span>
          </div>
        
  
        <div className="imgBx">
          <img src= {"http://localhost:3000/postImages/" + item.postImage} style={{width:"100%",height:"80vh"}} alt="post-1" className="cover" />
        </div>
        <div className="bottom">
          <div className="actionBtns">
            <div className="left">
              <span className="heart" >
                <span>
                
                <input type="checkbox"  onClick={(e)=>Like(e)} class="checkbox" id="checkbox" />
      <label for="checkbox" >
            <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
              <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
                <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

                <g id="heartgroup7" opacity="0" transform="translate(7 6)">
                  <circle id="heart1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                  <circle id="heart2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                </g>

                <g id="heartgroup6" opacity="0" transform="translate(0 28)">
                  <circle id="heart1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                  <circle id="heart2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                </g>

                <g id="heartgroup3" opacity="0" transform="translate(52 28)">
                  <circle id="heart2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                  <circle id="heart1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                </g>

                <g id="heartgroup2" opacity="0" transform="translate(44 6)">
                  <circle id="heart2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                  <circle id="heart1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                </g>

                <g id="heartgroup5" opacity="0" transform="translate(14 50)">
                  <circle id="heart1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                  <circle id="heart2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                </g>

                <g id="heartgroup4" opacity="0" transform="translate(35 50)">
                  <circle id="heart1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                  <circle id="heart2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                </g>

                <g id="heartgroup1" opacity="0" transform="translate(24)">
                  <circle id="heart1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                  <circle id="heart2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                </g>
              </g>
            </svg>
          </label>  
                          </span>
              </span>
              <svg aria-label="Comment" className="_8-yf5 " color="#262626" fill="#262626" height={24} role="img" viewBox="0 0 48 48" width={24} >
                {/* Coordinate path */}
                <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5
										11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0
										7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0
										4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1
										8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10
										2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5
										44.5 12.7 44.5 24z" fillRule="evenodd">
                </path>
              </svg>
              <svg aria-label="Share Post" className="_8-yf5 " color="#262626" fill="#262626" height={24} role="img" viewBox="0 0 48 48" width={24}>
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3
										3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6
										1 1.2 1.1h.2c.5 0 1-.3
										1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2
										6.1h35.5L18 18.7 5.2 6.1zm18.7
										33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                </path>
              </svg>
            </div>
            <div className="right">
              <svg aria-label="Save" className="_8-yf5 " color="#262626" fill="#262626" height={24} role="img" viewBox="0 0 48 48" width={24}>
                {/* Coordinate path */}
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6
										47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7
										3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4
										1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8
										0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6
										1.4-.9 2.2-.9z">
                </path>
              </svg>
            </div>
          </div>
          <a href="#">
            <p className="likes">{item.like} likes</p>
          </a>
          <a href="#">
            <p className="message">
              <b>Raju Modi</b>
            </p>
          </a>
          <a href="#">
            <h4 className="comments">View all 32 comments</h4>
          </a>
          <a href="#">
            <h5 className="postTime">2 hours ago</h5>
          </a>
          <div className="addComments">
            <div className="reaction">
              <h3>
                <i className="far fa-smile" />
              </h3>
            </div>
            <input type="text" className="text" placeholder="Add a comment..." />
            <a href="#">Post</a>
            
          </div>
        </div>
      </div>
      
      )}
    </div>
  </div>
</main>
  )
}

export default Post;


