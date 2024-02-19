import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import About from './hostle/About'
import Home from './hostle/Home'
import Mess from './hostle/Mess'
import Contact from './hostle/Contact'
import Fotter from './hostle/Fotter'
import Carousel from './hostle/Carousel'

const Components = () => {
  return (
    <Box>
       <Home/>
       <About/>
       <Mess/>
       <Carousel/>
       <Contact/>
      
      
    </Box>
  )
}

export default Components