import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../services/WebApi";
import WebServices from "../services/WebServices";
export const fetchSavePost=createAsyncThunk("savePost/fetchSavePost",async(userId,postId)=>{
const response= await WebServices.postApi(WebApi.LOAD_SAVEPOST,{userId:userId,postId:postId})
console.log(response.data.result);
return response.data.result;
})

const slice=createSlice({
    name:"savePost",
    initialState:{
        value:{
            savePosts:[]
        }
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSavePost.pending,(state,action)=>{
            state.value.savePosts=[];
        });
        builder.addCase(fetchSavePost.fulfilled,(state,action)=>{
            state.value.savePosts=action.payload;
        });
        builder.addCase(fetchSavePost.rejected,(state,action)=>{
            state.value.savePosts=[];
        })
    }

});
export default slice.reducer;