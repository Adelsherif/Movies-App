import { configureStore } from "@reduxjs/toolkit";
import  moviesslice  from "./reducer";

export const store = configureStore({
    reducer:{
       collection:moviesslice,
    }
})