import React from 'react'
import icon from './icon.jpeg'
import { Link } from 'react-router-dom';
import "./css/sidebar.scss";
import Post from './Post';
import SideButton from './SideButton';
const Nav = () => {
  
  return (
    <div >
  <aside className="sidebarCode">
  <div className="profilepic"style={{display:'flex',justifyContent:'center'}}>
                    <div className="profile_img">
                      <div className="image">
                        <img src={icon} alt="img8" />
                      </div>
                    </div>
                  </div>

    <nav className="navBarCode">
    <h5 className='text-white text-center mt-5 mb-5'>Name</h5>
      <ul>
        <li><Link  to="/createPost">Create Post </Link></li>
        <li><Link  to="/savePost">Saved Post</Link></li>
        <li><Link  to="#">Notification</Link></li>
        <li><Link  to="/">Logout</Link></li>
      </ul>
    </nav>
  </aside>
  <SideButton/>
  
<Post></Post>
    </div>
  )
}

export default Nav
