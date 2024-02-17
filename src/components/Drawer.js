import * as React from 'react';
import { Drawer,Button,List,MenuItem,Box, Container,Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { SiIfood } from "react-icons/si";
import { GrUserAdmin } from "react-icons/gr";


const NewContainer = styled(Container)(
  { height:'100%',
    paddingTop:'60px'
}
)

const Drawerr=()=> {
  

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
  return (
    
    <Box  sx={{display:{xs:'block',sm:'none'}}}  >
      {['left'].map((anchor) => (
        <React.Fragment   key={'left'} >
            <GiHamburgerMenu size={35} onClick={toggleDrawer('left', true)} />
        
          <Drawer
          
            sx={{width:'40vw ! important'}}
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onClick={toggleDrawer(anchor, false)}
          >
         
        <NewContainer sx={{width:{xs:'40vw',sm:'20vw'}}} >

             <MenuItem  sx={{gap:'7px',backgroundColor:'rgb(221, 218, 218)'}}> <IoMdHome size={'30px'} /><Link to='/' > Home</Link></MenuItem> <Divider/>
             <MenuItem  sx={{gap:'7px',backgroundColor:'rgb(221, 218, 218)'}}> <SiIfood size={'30px'} /> <Link to='/mess'> Mess</Link></MenuItem> <Divider/>
             <MenuItem  sx={{gap:'7px',backgroundColor:'rgb(221, 218, 218)'}}><FcAbout size={'30px'} /> <Link to='/about'> About</Link></MenuItem>  <Divider/>
             <MenuItem  sx={{gap:'7px',backgroundColor:'rgb(221, 218, 218)'}}><GrUserAdmin size={'30px'} /> <Link to='/admin'> Admin</Link></MenuItem>  <Divider/>
        </NewContainer>
            
                    
           
           
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Drawerr