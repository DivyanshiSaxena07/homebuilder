import axios from "axios";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { fetchPosts } from "./Slices/postSlice";
import { setCustomer } from "./Slices/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const [signUpEmail,setSignUpEmail] = useState("");
  const [signUpPassword,setSignUpPassword] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  const [user,setUser] = useState("");
  const [name,setName] = useState("");
  let dispatch = useDispatch();
   const signup = () =>{
    let obj = {
      name:name,
      email:signUpEmail,
      password:signUpPassword,
      user:user
    }
  let response = axios.post("http://localhost:3000/user/signup",obj);
  dispatch(setCustomer(obj));

 
  navigate("/home",response.data.user);
//  console.log(response.data.user);
   }
   const login = async () =>{
    let response = await axios.post("http://localhost:3000/user/login",{email:loginEmail,password:loginPassword});
         if(response.request.status==200)
         {
          dispatch(setCustomer(response.data.user));
          // alert(response.data.message);
          dispatch(fetchPosts());
          navigate("/home",response.data.user);
        }
        else 
        alert(response.data.message);

   }


  return (
    <div>
      <header id="header">
  <div className="container-fluid">
    <div id="logo" className="pull-left">
      <h1><a href="#intro" className="scrollto">Home Builder</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>*/}
    </div>
    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"><a href="#intro">Home</a></li>
        <li><a href="#portfolio">PortFolio</a></li>
        {/* <li><a href="#team">SignUp</a></li> */}
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link><button type="button" className=" h1 btn btn-outline-success text-white text-bold" data-toggle="modal" data-target="#exampleModalCenter">
                Login
              </button>
    <div className="modal fade" id="exampleModalCenter" data-backdrop="false" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="ion-ios-close" />
            </button>
          </div>
          <div className="modal-body p-4 py-5 p-md-5">
            <h3 className="text-center mb-3">Login Account</h3>
            <ul className="ftco-footer-social p-0 text-center">
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter" /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook" /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram" /></a></li>
            </ul>
            <form action="#" className="signup-form">
              <div className="form-group mb-2">
                <label htmlFor="email">Email Address</label>
                <input type="text" className="form-control"  onChange={(event)=>setLoginEmail(event.target.value)}/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control"  onChange={(event)=>setLoginPassword(event.target.value)}/>
              </div>
              <div className="form-group mb-2">
                <button  onClick={login}  className="form-control btn btn-primary rounded submit px-3">Sign In</button>
              </div>
              <div className="form-group d-md-flex">
                <div className="w-100 text-center">
                  <a href="#" className="forgot">I'm already a member</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></Link></li>
{/* Login  Modal  */}



    {/* Sign UP Modal  */}
    <li><a href="#"><Link ><button type="button" className=" h1 btn btn-outline-success text-white text-bold" data-toggle="modal" data-target="#exampleModalCenter1">
                SignUp
              </button>
    <div className="modal fade" id="exampleModalCenter1" data-backdrop="false" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="ion-ios-close" />
            </button>
          </div>
          <div className="modal-body p-4 py-5 p-md-5">
            <h3 className="text-center mb-3">Create Your Account</h3>
            <ul className="ftco-footer-social p-0 text-center">
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter" /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook" /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram" /></a></li>
            </ul>

            <form onSubmit={signup} className="signup-form">
              <div className="form-group mb-2">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control"  onChange={(event)=>setName(event.target.value)}/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email">Email Address</label>
                <input type="text" className="form-control"  onChange={(event)=>setSignUpEmail(event.target.value)} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password" onChange={(event)=>setSignUpPassword(event.target.value)} />
              </div>
           
              <select className='form-control mt-2 mb-3' onChange={(event)=>{setUser(event.target.value)}}>
              
                <option value="#">Select User </option>
                <option value="Customer">Customer </option>
                <option value="Builder">Builder</option>
              </select>
              <div className="form-group mb-2  mt-5">
                <button onClick={signup}  className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
              </div>
              <div className="form-group d-md-flex">
                <div className="w-100 text-center">
                  <a href="#" className="forgot">I'm already a member</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></Link></a></li>
      </ul>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Header





// import axios from "axios";
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Signup from './Signup';
// const Header = () => {
//   const [signUpEmail,setSignUpEmail] = useState("");
//   const [signUpPassword,setSignUpPassword] = useState("");
//   const [loginEmail,setLoginEmail] = useState("");
//   const [loginPassword,setLoginPassword] = useState("");
//   const [name,setName] = useState("");
//    const signup = () =>{
//     alert(signUpEmail);
//     alert(signUpPassword);

//   let response = axios.post("http://localhost:3000/user/signup",{name:name,email:signUpEmail,password:signUpPassword});

//    }
//    const login = () =>{
//          alert(loginEmail);
//          alert(loginPassword);
//    }


//   return (
//     <div>
//       <header id="header">
//   <div className="container-fluid">
//     <div id="logo" className="pull-left">
//       <h1><a href="#intro" className="scrollto">Home Builder</a></h1>
//       {/* Uncomment below if you prefer to use an image logo */}
//       {/* <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>*/}
//     </div>
//     <nav id="nav-menu-container">
//       <ul className="nav-menu">
//         <li className="menu-active"><a href="#intro">Home</a></li>
//         <li><a href="#portfolio">PortFolio</a></li>
//         {/* <li><a href="#team">SignUp</a></li> */}
//         <li><a href="#about">About Us</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#"><Link ><button type="button" className=" h1 btn btn-outline-success text-white text-bold" data-toggle="modal" data-target="#exampleModalCenter">
//                 Login
//               </button>
//     <div className="modal fade" id="exampleModalCenter" data-backdrop="false" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//       <div className="modal-dialog modal-dialog-centered" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true" className="ion-ios-close" />
//             </button>
//           </div>
//           <div className="modal-body p-4 py-5 p-md-5">
//             <h3 className="text-center mb-3">Login Account</h3>
//             <ul className="ftco-footer-social p-0 text-center">
//               <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter" /></a></li>
//               <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook" /></a></li>
//               <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram" /></a></li>
//             </ul>
//             <form action="#" className="signup-form">
//               <div className="form-group mb-2">
//                 <label htmlFor="email">Email Address</label>
//                 <input type="text" className="form-control"  onChange={(event)=>setLoginEmail(event.target.value)}/>
//               </div>
//               <div className="form-group mb-2">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" className="form-control"  onChange={(event)=>setLoginPassword(event.target.value)}/>
//               </div>
//               <div className="form-group mb-2">
//                 <button  onClick={login}  className="form-control btn btn-primary rounded submit px-3">Sign In</button>
//               </div>
//               <div className="form-group d-md-flex">
//                 <div className="w-100 text-center">
//                   <a href="#" className="forgot">I'm already a member</a>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div></Link></a></li>
// {/* Login  Modal  */}



//     {/* Sign UP Modal  */}
//     <li><a href="#"><Link ><button type="button" className=" h1 btn btn-outline-success text-white text-bold" data-toggle="modal" data-target="#exampleModalCenter1">
//                 SignUp
//               </button>
//     <div className="modal fade" id="exampleModalCenter1" data-backdrop="false" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//       <div className="modal-dialog modal-dialog-centered" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true" className="ion-ios-close" />
//             </button>
//           </div>
//           <div className="modal-body p-4 py-5 p-md-5">
//             <h3 className="text-center mb-3">Create Your Account</h3>
//             <ul className="ftco-footer-social p-0 text-center">
//               <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter" /></a></li>
//               <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook" /></a></li>
//               <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram" /></a></li>
//             </ul>

//             <form onSubmit={signup} className="signup-form">
//               <div className="form-group mb-2">
//                 <label htmlFor="name">Full Name</label>
//                 <input type="text" className="form-control"  onChange={(event)=>setName(event.target.value)}/>
//               </div>
//               <div className="form-group mb-2">
//                 <label htmlFor="email">Email Address</label>
//                 <input type="text" className="form-control"  onChange={(event)=>setSignUpEmail(event.target.value)} />
//               </div>
//               <div className="form-group mb-2">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" className="form-control" placeholder="Password" onChange={(event)=>setSignUpPassword(event.target.value)} />
//               </div>
           
//               <select className='form-control mb-3'>
              
//                 <option value="#">Select User </option>
//                 <option value="Customer">Customer </option>
//                 <option value="Builder">Builder</option>
//               </select>
//               <div className="form-group mb-2  mt-2">
//                 <button onClick={signup}  className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
//               </div>
//               <div className="form-group d-md-flex">
//                 <div className="w-100 text-center">
//                   <a href="#" className="forgot">I'm already a member</a>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div></Link></a></li>
//       </ul>
//     </nav>
//   </div>
// </header>

//     </div>
//   )
// }

// export default Header
