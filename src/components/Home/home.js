import React from 'react'
import './home.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

function Home() {
    
  return (
    <BrowserRouter>
    <Header />
    <div className='home' id='home'>
       <div className='container'>
        <div className='text'>
          <h1>Tenet</h1>
          <span>2020  .  1-season <span className='production'>NetFlix</span></span><br />
          <span>Moive . Reality</span>
          <p>A co-production between the United Kingdom and the United States, it stars John David Washington,
             Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh. The film follows
              a Central Intelligence Agency agent who learns how to manipulate the flow of time to prevent an attack from 
              the future that threatens to annihilate the present world. Nolan continued his relationship with Warner Bros.
               and Syncopy for both the production and the distribution of the film.</p>
        </div>
       </div>
    </div>
    </BrowserRouter>
  )
}



export default Home;