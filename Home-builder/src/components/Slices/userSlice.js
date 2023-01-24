import {createSlice}  from "@reduxjs/toolkit";
const userSlice = createSlice({
     name:"user",
     initialState:{
     value:{
           customer:[]
     }
    },
    reducers:{
        setCustomer:(state,action)=>{
            state.value.customer = action.payload;
                    }     
    }
});
export default userSlice.reducer;
export const { setCustomer } = userSlice.actions;