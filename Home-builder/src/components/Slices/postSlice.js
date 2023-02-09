import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import WebApi from "../services/WebApi";
import WebServices from "../services/WebServices.js";

export const fetchPosts = createAsyncThunk("post/fetchPosts",async()=>{
    
    const response = await WebServices.getApi(WebApi.LOAD_POSTS);
    console.log(response.data.result);
    return response.data.result;
});

const postSlice = createSlice({
    name:"post",
    initialState:{
    value:{
        posts:[],
        error:""
    }
},
    reducers:{
        addPost:(state,action)=>{
            let result=action.payload;
            state.value.posts=[...state.value.posts,result];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state,action)=>{
            state.value.posts =[];
            state.value.error ="pending";
        });
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.value.posts =action.payload;
            state.value.error ="fulfilled";
        });
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.value.posts = [];
            state.value.error ="rejected";
        });
    },
});
export const {addPost}=postSlice.actions;
export default postSlice.reducer;