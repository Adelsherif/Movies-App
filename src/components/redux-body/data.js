import { createAsyncThunk } from "@reduxjs/toolkit";


export const text =createAsyncThunk('json' ,
       async () =>{
   const result= fetch('https://raw.githubusercontent.com/Adelsherif/json-moive/master/film.json').then(resp => resp.json()).then(data => data)
      return result;
    }
     ) 