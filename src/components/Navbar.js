import React, { useContext } from 'react'
import {AppBar,Toolbar,Button,Typography,Tab, Box, Drawer} from '@mui/material'
import styled from '@emotion/styled'
import { FaUniversity } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import {Menu,MenuItem} from '@mui/material';
import './hostle/css/style.css'
import AdminContext from './context/AdminContext';
import Drawerr from './Drawer';

// import StorefrontIcon from '@mui/icons-material/Storefront';


const Btn = styled(Button)`
background:#a11111;
color:#fff;

`
const Links = styled(Box)`
  display:flex;
  justify-content:space-around;


 
`


const Navbar = () => {
  const authtoken =  sessionStorage.getItem("authtoken");
  const allow = sessionStorage.getItem("authtoken")
  const Navigate = useNavigate()
  const a = useContext(AdminContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  return (
      <>

        <AppBar  position='sticky' sx={{bgcolor:{sm:'green',xs:'#12a8de'}}} component={'nav'}>
          <Toolbar sx={{display:{xs:'flex'},justifyContent:{xs:'space-between'}}}>
            <Drawerr/>
            <Typography
              color={"goldenrod"}
              variant='h6'
              flex={1}
              component={"div"}
              sx={{fontSize:'24px',display:{xs:'none',sm:'flex'},
             fontWeight:'600',alignItems:'center'}}
            ><FaUniversity  size={50}  /> <span style={{marginLeft:'10px',fontSize:'26px'}}>Bsa Hostle</span> </Typography>
  
            <Links id='link' sx={{display:{xs:'none',sm:'flex'},width:{sm:'50%',md:'40%'}
          }} >
              <Link to='/'>Home</Link>
              <Link to='/mess'>Mess</Link>
              <Link to='/about'>About</Link>
              <Link to='/admin'>Admin</Link>
   

                
            </Links>
         
            <Box >
      <Button
     
      
        sx={{display:`${authtoken?'block':'none'}`}}
        variant='contained'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Attendence
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><Link to='/admin/login/land/firstyear'>1st Year</Link></MenuItem>
        <MenuItem ><Link to='/admin/login/land/secondyear'>2st Year</Link></MenuItem>
        <MenuItem ><Link to='/admin/login/land/thirdyear'>3st Year</Link></MenuItem>
        <MenuItem ><Link to='/admin/login/land/fourthyear'>4st Year</Link></MenuItem>
       
      </Menu>
    </Box>
        
            
          </Toolbar>
        </AppBar>
      </>
        
      
  )
}

export default Navbar