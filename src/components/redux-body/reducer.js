import { createSlice } from "@reduxjs/toolkit";
import { text } from "./data";


export const moviesslice = createSlice({
    name:'json',
    initialState:{
       shows:[],
       id:localStorage.getItem("showid")  ? JSON.parse (localStorage.getItem("showid")) : 0,
       value:''
    },
    extraReducers: {
       [text.pending]:(state) =>{

       },
       [text.fulfilled]:(state,action) =>{
           state.shows = action.payload;
       },
       [text.rejected]:(state) =>{
       
    },
    
    }
    ,reducers: {
        getid: (state,action) =>{
            state.id = action.payload;
            localStorage.setItem("showid",JSON.stringify(state.id))
        },
        getvalue: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const { getid ,getvalue } = moviesslice.actions;
export default moviesslice.reducer;
