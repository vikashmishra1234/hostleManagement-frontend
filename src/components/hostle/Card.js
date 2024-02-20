import React from 'react'
import Mess from './Mess'
import { Box } from '@mui/material'

import Img10 from '../hostle/css/utils/10.jpg.jpeg'
import Img11 from '../hostle/css/utils/11.jpg.jpeg'

import Img16 from '../hostle/css/utils/16.jpg.jpeg'

const Card = () => {
  return (
    <Box sx={{gap:{xs:'30px',margin:'20px 0px 20px 0px',sm:''},display:'flex',flexDirection:{xs:'column',sm:'row'},justifyContent:'space-around',alignItems:'center'}}>
       <Mess img={Img10} text={"The Hostle attempt to take resonsibility for its hostle students following these rules makes for harmonius living....."} title={'Rules and regulation'} />
       <Mess img={Img16} text={'BSA hostle has a Provost,a warder who takes care of the descipline and regulation functoning of the hostle'} title={'Management Committee Members'} />
       <Mess img={Img11} text={'We offer best Quality facilites to the student at very low fees. it includes mess ,electricity....'} title={'Hostle Fees'} />
       
       </Box>
  )
}

export default Card
