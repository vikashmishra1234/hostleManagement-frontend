import * as React from 'react';
import { Drawer,MenuItem,Box, Container,Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { SiIfood } from "react-icons/si";
import { GrUserAdmin } from "react-icons/gr";


const NewContainer = styled(Container)(
  { height:'100%',
    paddingTop:'60px',
    background:'#50989a'
}
)
const Li = styled(MenuItem)(
  {gap:'7px',backgroundColor:'rgb(221, 218, 218)',
  borderRadius:'12px',
  fontFamily:'cursive',
  fontSize:'20px'
}
)

const Drawerr=()=> {
  const allow = sessionStorage.getItem("authtoken");

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
            <GiHamburgerMenu size={31} color='#726e6e' onClick={toggleDrawer('left', true)} />
        
          <Drawer
          
            sx={{width:'40vw ! important'}}
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onClick={toggleDrawer(anchor, false)}
          >
         
        <NewContainer sx={{width:{xs:'40vw',sm:'20vw'}}} >

             <Li  > <IoMdHome size={'30px'} /><Link to='/' > Home</Link></Li> <Divider/>
             <Li  > <SiIfood size={'30px'} /> <Link to='/mess'> Mess</Link></Li> <Divider/>
             <Li ><FcAbout size={'30px'} /> <Link to='/about'> About</Link></Li>  <Divider/>
             <Li  ><GrUserAdmin size={'30px'} /> <Link to={`${allow?'/admin/login/land':'/admin'}`}> Admin</Link></Li>  <Divider/>
        </NewContainer>
            
                    
           
           
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Drawerr