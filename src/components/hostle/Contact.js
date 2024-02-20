import React, { useState } from "react";
import {  Button, Paper, TextField } from "@mui/material";
import css from "./css/Contact.module.scss";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";
import {  useFormik } from "formik";
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
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
      initialValues:initialValues,
      validationSchema:ResistrationSchema,
      onSubmit: (values,action)=>{
        try {
          setLoader(true)
          emailjs
          .sendForm('service_u636c7q', 'template_0a551z8', form.current,{
            publicKey:'Ff0ehUacs-SPxliQT'
          }
          
          )
          .then(
            () => {
              setLoader(false)
              action.resetForm();
              Swal.fire({
                text:'your response has been recorded',
                icon:'success',
                confirmButtonAriaLabel:false,
                timer:'1500'
              })
      
            },
            (error) => {
                setLoader(false)
                action.resetForm();
                Swal.fire({
                    text:error.message,
                    icon:'error',
                    confirmButtonAriaLabel:false,
                    timer:'1500'
                  })
                },
              );
            } catch (error) {
          setLoader(false)
          console.log(error)
          action.resetForm();
          Swal.fire({
              title:error,
              icon:'error',
              confirmButtonAriaLabel:false,
        
            })
        
        
          }
       
      
      },
    });
    console.log(errors)
  
    return (
      <div className={css.container}>
        <h1>For more info</h1>
      <div className={css.form}>
        <Paper variant="outlined" elevation={8}>

        <form ref={form}  onSubmit={handleSubmit}>
        <TextField onChange={handleChange} value={values.name} onBlur={handleBlur} name='name' label="Name" type="text"   variant="outlined" />
        {errors.name && touched.name?<small style={{color:"red"}}>{errors.name}</small>:''}
        <TextField onChange={handleChange} value={values.email} onBlur={handleBlur} name="email" label="email"  type="email"  variant="outlined" />
          {errors.email && touched.email?<small style={{color:"red"}}>{errors.email}</small>:''}
        <TextField onChange={handleChange} value={values.phone} onBlur={handleBlur} name="phone" label="phone" type="phone"   variant="outlined" />
          {errors.phone && touched.phone?<small style={{color:"red"}}>{errors.phone}</small>:''}
        <TextField onChange={handleChange} value={values.year} onBlur={handleBlur} name="year" label="year of studying" type="number"   variant="outlined" />
          {errors.year && touched.year?<small style={{color:"red"}}>{errors.year}</small>:''}
        <Button variant="contained" type="submit">{Loader?<BeatLoader></BeatLoader>:'Register'}</Button>
        </form>
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
