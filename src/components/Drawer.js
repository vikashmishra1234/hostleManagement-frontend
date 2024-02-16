import * as React from 'react';
import { Drawer,Button,List,MenuItem,Box, Container,Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

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
        <React.Fragment key={'left'} >
            <GiHamburgerMenu size={35} onClick={toggleDrawer('left', true)} />
          {/* <Button onClick={toggleDrawer('left', true)}>{'left'}</Button> */}
          <Drawer
          
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
         
        <Container sx={{marginTop:'30px',fontSize:'25px'}}>
             <MenuItem  sx={{fontSize:'23px',backgroundColor:'rgb(221, 218, 218)'}}><Link to='/mess'>Mess</Link></MenuItem> <Divider/>
             <MenuItem  sx={{fontSize:'23px',backgroundColor:'rgb(221, 218, 218)'}}><Link to='/about'>About</Link></MenuItem>  <Divider/>
             <MenuItem  sx={{fontSize:'23px',backgroundColor:'rgb(221, 218, 218)'}}><Link to='/admin'>Admin</Link></MenuItem>  <Divider/>
        </Container>
            
                        
           
           
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Drawerr