import React, { useState } from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import css from "./css/Contact.module.scss";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";
import { Formik, useFormik } from "formik";
import { ResistrationSchema } from "./Validations/Resistration";
const initialValues = {
  name:'',
  email:'',
  year:'',
  id:'',
  phone:''
}

const Contact = () => {
  const form = useRef();
  const [Loader,setLoader]= useState(false);
  const {values,error,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:ResistrationSchema,
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  console.log(values)


  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   try {
  //     setLoader(true)
  //     emailjs
  //     .sendForm('service_u636c7q', 'template_0a551z8', form.current,{
  //       publicKey:'Ff0ehUacs-SPxliQT'
  //     }
      
  //     )
  //     .then(
  //       () => {
  //         setLoader(false)
  //         Swal.fire({
  //           text:'your response has been recorded',
  //           icon:'success',
  //           confirmButtonAriaLabel:false,
  //           timer:'1500'
  //         })
        
  //       },
  //       (error) => {
  //         setLoader(false)
  //         Swal.fire({
  //           text:error.message,
  //           icon:'error',
  //           confirmButtonAriaLabel:false,
  //           timer:'1500'
  //         })
  //       },
  //     );
  //   } catch (error) {
  //     setLoader(false)
  //     console.log(error)
  //     Swal.fire({
  //       title:error,
  //       icon:'error',
  //       confirmButtonAriaLabel:false,
       
  //     })

      
  //   }
  // }
  return (
    <div className={css.container}>
        <h1>Register Now</h1>
      <div className={css.form}>
        <Paper variant="outlined" elevation={8}>

        <form ref={form} action="" onSubmit={handleSubmit}>
        <TextField onChange={handleChange} value={values.name} onBlur={handleBlur} name='name' label="Name" type="text"  required variant="outlined" />
        <TextField onChange={handleChange} value={values.email} onBlur={handleBlur} name="email" label="email"  type="email" required variant="outlined" />
        <TextField onChange={handleChange} value={values.phone} onBlur={handleBlur} name="phone" label="phone" type="phone"  required variant="outlined" />
        <TextField onChange={handleChange} value={values.year} onBlur={handleBlur} name="year" label="year of studying" type="number"  required variant="outlined" />
        <TextField onChange={handleChange} value={values.id} onBlur={handleBlur} name="id" label="your Identity Number" type="text" required variant="outlined" />
        <Button variant="contained" type="submit">{Loader?<BeatLoader></BeatLoader>:'Register'}</Button>
        </form>
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
