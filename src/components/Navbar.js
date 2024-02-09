import React from 'react'
import {AppBar,Toolbar,Button,Typography, Box} from '@mui/material'
import styled from '@emotion/styled'
import { FaUniversity } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './hostle/css/style.css'

// import StorefrontIcon from '@mui/icons-material/Storefront';


const Btn = styled(Button)`
background:#a11111;
color:#fff;

`
const Links = styled(Box)`
  display:flex;
  justify-content:space-around;
  width:15vw;

 
`


const Navbar = () => {
  const Navigate = useNavigate()
  return (
      <Box sx={{height:'10vh'}}>

        <AppBar sx={{bgcolor:'#077707',height:'10vh'}} component={'nav'}>
          <Toolbar>
            <Typography
              color={"goldenrod"}
              variant='h6'
              component={"div"}
              sx={{flexGrow:1,fontSize:'24px',display:'flex',
              fontSize:'28px',alignItems:'center', fontWeight:'600'}}
            ><FaUniversity  size={35} /> <span style={{marginLeft:'10px'}}>Bsa Hostle</span> </Typography>
        
            <Links id='link' >
              <Link to='/mess'>Mess</Link>
              <Link to='/about'>About</Link>
            </Links>
         

        
            
          </Toolbar>
        </AppBar>
      </Box>
        
      
  )
}

export default Navbar