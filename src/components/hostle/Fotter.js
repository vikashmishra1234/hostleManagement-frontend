import React from 'react'
import { Paper } from '@mui/material'
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './css/Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import{ Link }from 'react-router-dom'
import { RiFolderUnknowLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { MdPermContactCalendar } from "react-icons/md";
import {Divider }from '@mui/material';


const Fotter = () => {
  return (
    
 <div>

      <Paper elevation={8} sx={{background:'rgb(53 50 50 / 87%)'}}>
      
        <div className='top'>
        <p>Get connected with us at social media-</p>
        <div className='icon'><Link to=""><IoLogoWhatsapp/></Link> <Link to=""><FaInstagram/></Link> <Link to=""><FaFacebook/></Link></div>
        </div>
     <hr color='gray' />
     <div  id='add'>
            <h4>Reach Us</h4>
          <span className='span'><IoMdHome/> Mathura</span>
          <span className='span'><MdEmail/> vikash12@gmail.com</span>
          <span className='span'><FaPhoneAlt/> +91 8979481819</span>
          </div>

        <div className='upper colrev'>

          <div className='flexCol ' >
            <h4>Reach Us</h4>
          <span className='span'><IoMdHome/> Mathura</span>
          <span className='span'><MdEmail/> vikash12@gmail.com</span>
          <span className='span'><FaPhoneAlt/> +91 8979481819</span>
          </div>

          <div className='flexCol'>
            <h4>Useful Links</h4>
            <span className='span'><Link className='a' to=''>Order Something</Link></span>
            <span className='span'><Link className='a' to=''>Fees Structure</Link></span>
            <span className='span'><Link className='a' to=''>More about Hostel</Link></span>
          </div>

          <div className='flexCol'>
            <h4>Also Visit</h4>
            <span className='span'>
            <IoMdHome/> <Link to= '/'>Home</Link></span>
            <span className='span'> <RiFolderUnknowLine/> <Link to= '/about'>About</Link></span>
            <span className='span'> <MdPermContactCalendar/> <Link to= '/contact'>Contact</Link></span>
          </div>
        </div>
     
        <div className='footer'>2024 Copyright: vikashmishra.com</div>

      </Paper>
 </div>
    
  )
}

export default Fotter