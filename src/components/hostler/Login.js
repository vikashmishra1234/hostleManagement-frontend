import React, { useContext, useEffect, useState } from 'react'
import {TextField, Button} from '@mui/material'
import css from '../hostle/css/Login.module.scss'
import {Avatar} from '@mui/material'
import { CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import AdminContext from '../context/AdminContext';
import { BeatLoader } from 'react-spinners';





const Login = () => {
  const a = useContext(AdminContext)
    const [Name,setName] = useState('')
    const [Password,setPassword] = useState('')
    const [Loading,setLoding]=useState(false)
    const Navigete = useNavigate()

    useEffect(()=>{
        Swal.fire({
          icon:'info',
          text:'usernname: vikash ,pass:1234',
          confirmButtonAriaLabel:true
        })
    },[])

    const handleSubmit = async(e)=>{
      setLoding(true)
  
  
        e.preventDefault()
    
        const stuData = {
            userName:Name,
            Password:Password
        }
        try {
          
          const headers = {
            headers:{
              "Authorization":`bearer ${localStorage.getItem("token")}`,
              "Content-Type":"application/json"
            }
          }
         let response = await axios.post('https://hostlebackend.onrender.com/api/adminlogin',stuData,headers);
         setLoding(false)
         if(response.data.error){

           Swal.fire({
            position: "top-",
            icon: "error",
            title: `${response.data.error}`,
            showConfirmButton: false,
            timer: 1500
          });
         }
         else{
          a.setLogin(true)
          sessionStorage.setItem("authtoken",response.data.token)
          localStorage.setItem("token",response.data.token)
          Swal.fire({
            position: "top-",
            icon: "success",
            title: `${response.data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
            Navigete('/admin/loginx')
         }
        } catch (error) {
          setLoding(false)
          console.log(error.message)
          Swal.fire({
            position: "top-",
            icon: "error",
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      
    }
  return (
  <div className={css.container}>
    <form onSubmit={handleSubmit}>
        <Avatar className={css.div} sx={{bgcolor:'green',color:'white'}}>
        <CiLock/>
        </Avatar>
        <h2>Login</h2>
        <TextField name='Name' value={Name} onChange={(e)=>{setName(e.target.value)}}  required fullWidth className={css.input} type='text' label="Username" variant='standard'/>
        <TextField name='Password' value={Password} onChange={(e)=>{setPassword(e.target.value)}} required fullWidth className={css.input} label="Password" type='password' variant='standard'/>
        <Button component={'button'} fullWidth variant='contained' type='submit'>{Loading?<BeatLoader size={'12px'}/>:'Login'}</Button>
    </form>
  </div>

  )
}

export default Login
