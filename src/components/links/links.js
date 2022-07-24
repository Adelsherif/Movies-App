import React, { useEffect, useState } from 'react'
import './links.css'

 function Links() {
    const [index , setindex] = useState(1)

    const tab = (i) =>{
      setindex(i)
      localStorage.setItem("index" ,JSON.stringify(i))
    }
    useEffect(()=>{
         setindex(JSON.parse(localStorage.getItem("index")));
    },[index])
  return (
    <div className='links'>
        <div className='container'>
            <ul>
             <li><a href='/' className={index === 1? 'active' : ''} onClick={() => tab(1)}>All</a></li>
             <li><a href='/movies' className={index === 2 ? 'active' : ''} onClick={() => tab(2)}>Movies</a></li>
             <li><a href='/series' className={index === 3 ? 'active' : ''} onClick={() => tab(3)}>Series</a></li> 
            </ul>
        </div>
    </div>
  )
}

export default Links;