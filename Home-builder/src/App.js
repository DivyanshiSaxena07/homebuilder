import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import IndexPage from "./components/IndexPage";
import CreatePost from "./components/CreatePost.js";
import {fetchPosts} from "./components/Slices/postSlice.js";
import { useDispatch } from 'react-redux';
import SavePost from "./components/SavedPost.js";
function App() {
  let dispatch = useDispatch();
  dispatch(fetchPosts());
  return (
    <div>
    <Routes>
      <Route path="/" element={<IndexPage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/createPost" element={<CreatePost/>}></Route>
      <Route path="/savePost" element={<SavePost/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
