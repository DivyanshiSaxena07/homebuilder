import { Route, Routes,Navigate } from "react-router-dom";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import IndexPage from "./components/IndexPage";
import CreatePost from "./components/CreatePost.js";
import {fetchPosts} from "./components/Slices/postSlice.js";
import { useDispatch } from 'react-redux';
import SavePost from "./components/SavedPost.js";

import ChatHome from "./pages/Home";
import ChatLogin from "./pages/ChatLogin";
import ChatRegister from "./pages/ChatRegister";
import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const currentUser = useContext(AuthContext);

  let dispatch = useDispatch();
  dispatch(fetchPosts());

  const ProtectedRoute = ({ children }) =>{
    if(!currentUser) {
      if(!currentUser) {
        return <Navigate to="/login" />;
      }
    }
    return children;
  }

  return (
    <div>
    <Routes>
      <Route path="/" element={<IndexPage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/createPost" element={<CreatePost/>}></Route>
      <Route path="/savePost" element={<SavePost/>}></Route>
      {/* <Route path="/">
        <Route index element={<ProtectedRoute>
          <ChatHome />
          </ProtectedRoute>
          } 
          />
        <Route path="login" element={<ChatLogin />} />
        <Route path="register" element={<ChatRegister />} />

      </Route> */}
    </Routes>
   
    </div>
  );
}

export default App;
