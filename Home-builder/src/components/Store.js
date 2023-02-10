import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./Slices/likeSlice.js";
import postslice from "./Slices/postSlice.js";
import savePostSlice from "./Slices/savePostSlice.js";
import userslice from "./Slices/userSlice.js";
const Store = configureStore({
    reducer:{
     User:userslice,
     Post:postslice,
     Like:likeSlice,
     SavePost:savePostSlice,
    }
});
export default Store;