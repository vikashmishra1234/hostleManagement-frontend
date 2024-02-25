import { Dialog, Button,Box,TextField } from '@mui/material'
import React from 'react'
import { FaLessThanEqual } from 'react-icons/fa'
import { useState } from 'react'

const SendEmail = (props) => {
    const [open,setOpen]=useState(props.Open)

    const handleClose = ()=>{
        setOpen(false)
    }
  return (
    <Box>
        <Dialog open={open}>
            <textarea placeholder='enter the message'></textarea>
        <Box>
            <Button variant="contained" onClick={handleClose}>Close</Button>
            <Button variant="contained">Send&#xe163;</Button>
        </Box>
        </Dialog>
    </Box>
  )
}

export default SendEmail
