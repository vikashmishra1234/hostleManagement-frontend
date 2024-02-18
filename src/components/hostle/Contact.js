import React, { useState } from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import css from "./css/Contact.module.scss";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      emailjs
      .sendForm('service_u636c7q', 'template_0a551z8', form.current,{
        publicKey:'Ff0ehUacs-SPxliQT'
      }
      
      )
      .then(
        () => {
          Swal.fire({
            text:'your response has been recorded',
            icon:'success',
            confirmButtonAriaLabel:false,
            timer:'1500'
          })
        },
        (error) => {
          Swal.fire({
            text:error.message,
            icon:'error',
            confirmButtonAriaLabel:false,
            timer:'1500'
          })
        },
      );
    } catch (error) {
      console.log(error)
      Swal.fire({
        title:error,
        icon:'error',
        confirmButtonAriaLabel:false,
       
      })

      
    }
  }
  return (
    <div className={css.container}>
        <h1>Register Now</h1>
      <div className={css.form}>
        <Paper variant="outlined" elevation={8}>

        <form ref={form} action="" onSubmit={handleSubmit}>
        <TextField name='name' label="Name"  required variant="outlined" />
        <TextField name="email" label="email"  required variant="outlined" />
        <TextField name="phone" label="phone"  required variant="outlined" />
        <TextField name="year" label="year of studying"  required variant="outlined" />
        <Button variant="contained" type="submit">Register</Button>
        </form>
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
