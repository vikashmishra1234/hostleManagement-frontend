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
  width:40%;

 
`


const Navbar = () => {
  const authtoken =  sessionStorage.getItem("authtoken");
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

        <AppBar  position='sticky' sx={{bgcolor:'##2f748e'}} component={'nav'}>
          <Toolbar sx={{display:{xs:'flex'},justifyContent:{xs:'space-between'}}}>
            <Drawerr/>
            <Typography
              color={"goldenrod"}
              variant='h6'
              flex={1}
              component={"div"}
              sx={{fontSize:'24px',display:{xs:'none',sm:'flex'},
             fontWeight:'600'}}
            ><FaUniversity  size={35}  /> <span style={{marginLeft:'10px'}}>Bsa Hostle</span> </Typography>
  
            <Links id='link' sx={{display:{xs:'none',sm:'flex'}}} >
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
        Branch
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