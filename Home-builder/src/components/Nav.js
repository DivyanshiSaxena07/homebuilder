import React from 'react'
import { Link } from 'react-router-dom';
import "./css/sidebar.scss";
import Post from './Post';
const Nav = () => {
  
  return (
    <div >
  <aside className="sidebarCode">
    <nav className="navBarCode">
      <ul>
        <li><Link  to="/createPost">Create Post </Link></li>
        <li><Link  to="#">Saved Post</Link></li>
        <li><Link  to="#">Notification</Link></li>
        <li><Link  to="#">Logout</Link></li>
      </ul>
    </nav>
  </aside>
<Post></Post>
    </div>
  )
}

export default Nav
