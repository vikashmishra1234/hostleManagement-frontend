import { Box } from '@mui/material'
import React from 'react'
import About from './hostle/About'
import Home from './hostle/Home'
import Mess from './hostle/Mess'
import Contact from './hostle/Contact'
import Carousel from './hostle/Carousel'
import Card from './hostle/Card'
import Fotter from './hostle/Fotter'
const Components = () => {
  return (
    <Box>
       <Home/>
       <About/>
      <Card/>
       <Carousel/>
       <Contact/>
      <Fotter/>
      
    </Box>
  )
}

export default Components