import React from 'react'
import {FaCopyright , FaFacebook ,FaTwitter ,FaInstagram ,FaPhone,FaYoutube} from 'react-icons/fa';
import './footer.css'

 function Footer() {
  return (
   <footer>
    <div className='container'>
        <div className='text'>
            <div className='about'>
                <h2>About Us</h2>
              <p>Here you will find everything you need from movies and series, family dramas, 
                action, wars, romance. Just browse and enter the details and read information about what you need. 
                Thank you for visiting our website.</p>
           </div>
           <div className='contact'>
            <h2>Contacts</h2>
           <ul>
              <li><FaFacebook /> FaceBook</li>
              <li><FaInstagram /> Instagram</li>
              <li><FaTwitter /> Twitter</li>
              <li><FaPhone /> Phone</li>
           </ul>
           </div>
           <div className='footerlinks'>
            <h2>Links</h2>
           <ul>
             <li><a href='/' >All</a></li>
             <li><a href='/movies'>Movies</a></li>
             <li><a href='/series'>Series</a></li> 
            </ul>
           </div>
        </div>
        <div className='copy'>
          <h4>Copyright <FaCopyright /> Adel Sherif 2022.</h4>
        </div>
    </div>
   </footer>
  )
}


export default Footer;