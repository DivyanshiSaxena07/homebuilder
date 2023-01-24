import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../services/WebApi";
import WebServices from "../services/WebServices";

export const fetchLike =createAsyncThunk('like/fetchLike',async()=>{
    let response=await WebServices(WebApi.ADD_LIKE);
    console.log(response.data)

})
const slice=createSlice({
    name:'like',
    initialState:{
        value:{
            likeList:[]
        }
    },
    reducers:{
      likeUnlike:(state,action)=>{
        state.value.post = action.payload;
    }     

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLike.pending,(state,action)=>{
            state.value.likeList=[];
        })
        builder.addCase(fetchLike.fulfilled,(state,action)=>{
            state.value.likeList=action.payload;
        })
        builder.addCase(fetchLike.rejected,(state,action)=>{
            state.value.likeList=[];
        })
    }
})
export default slice.reducer;