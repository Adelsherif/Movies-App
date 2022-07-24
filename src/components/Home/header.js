import React from 'react'
import './header.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { getvalue } from '../redux-body/reducer';
import {useDispatch } from 'react-redux';


export default function Header() {
   const dispatch = useDispatch();

    const submitter = (e) =>{
        e.preventDefault();
    }
    const val = (text) =>{
      dispatch(getvalue(text))
      document.getElementById('home').style.display='none'
    }
  return (
    <BrowserRouter>
         <header>
          <div className='name'><p>Movies<span className='span'>+</span></p></div>
          <form onSubmit={submitter}  >
          <input type='text' placeholder='search' onChange={(e) => val(e.target.value)}/>  
         <input type='submit' value="search" />
        </form>
        </header>
        </BrowserRouter>
  )
}
