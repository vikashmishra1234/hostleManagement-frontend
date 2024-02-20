import { Box } from '@mui/material'
import React from 'react'
import About from './hostle/About'
import Home from './hostle/Home'
import Mess from './hostle/Mess'
import Contact from './hostle/Contact'
import Carousel from './hostle/Carousel'
import Img4 from './hostle/css/utils/4.jpg.jpeg'
import Img6 from './hostle/css/utils/6.jpg.jpeg'
import Img5 from './hostle/css/utils/5.jpg.jpeg'
import Img7 from './hostle/css/utils/7.jpg.jpeg'
import Img8 from './hostle/css/utils/8.jpg.jpeg'
import Img10 from './hostle/css/utils/10.jpg.jpeg'
import Img9 from './hostle/css/utils/9.jpg.jpeg'
import Img11 from './hostle/css/utils/11.jpg.jpeg'
import Img12 from './hostle/css/utils/12.jpg.jpeg'
import Img13 from './hostle/css/utils/13.jpg.jpeg'
import Img14 from './hostle/css/utils/14.jpg.jpeg'
import Img15 from './hostle/css/utils/15.jpg.jpeg'
import Img16 from './hostle/css/utils/16.jpg.jpeg'

const Components = () => {
  return (
    <Box>
       <Home/>
       <About/>
       <Box sx={{gap:{xs:'30px',margin:'20px 0px 20px 0px',sm:''},display:'flex',flexDirection:{xs:'column',sm:'row'},justifyContent:'space-around',alignItems:'center'}}>
       <Mess img={Img10} text={"The Hostle attempt to take resonsibility for its hostle students following these rules makes for harmonius living....."} title={'Rules and regulation'} />
       <Mess img={Img16} text={'BSA hostle has a Provost,a warder who takes care of the descipline and regulation functoning of the hostle'} title={'Management Committee Members'} />
       <Mess img={Img11} text={'We offer best Quality facilites to the student at very low fees. it includes mess ,electricity....'} title={'Hostle Fees'} />
       
       </Box>
       <Carousel/>
       <Contact/>
      
      
    </Box>
  )
}

export default Components