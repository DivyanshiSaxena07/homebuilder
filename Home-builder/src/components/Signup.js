import React from 'react'
import "./ModalCss/style.css";
const Signup = () => {
  return (
    <div>
               <button type="button" className="btn btn-primary py-3 px-4" data-toggle="modal" data-target="#exampleModalCenter">
                Launch Modal 05
              </button>
   
    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
            <form action="#" className="signup-form">
              <div className="form-group mb-2">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email">Email Address</label>
                <input type="text" className="form-control" placeholder="johndoe@gmail.com" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group mb-2">
                <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
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
    </div>
  </div>
  
  )
}

export default Signup
