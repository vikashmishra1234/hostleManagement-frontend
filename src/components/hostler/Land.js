import React, { useEffect, useState } from 'react'
import {Divider} from '@mui/material'
import css from '../hostle/css/Land.module.scss';
import AddStudentForm from './AddStudent'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BeatLoader } from 'react-spinners';
import { Student } from '../hostle/Validations/Resistration';

const Land = () => {
 
  const [open, setOpen] = React.useState(false);
  const [remove,setRemove]=useState(false)
  const [attendence,setAttendence]=useState(false)
  const [Loading,setLoading]=useState(false)


  const headers = {
    headers:{
      "Authorization":`bearer ${localStorage.getItem("token")}`,
      "Content-Type":"application/json"
    }
  }

  //count of student
const [Students,setStudents] = useState('0')
  useEffect(()=>{
    const find =async()=>{

      try {
        const res = await axios.get('http://localhost:5000/api/studentnumber',headers);
       setStudents(res.data.Students)
      
      } catch (error) {
        console.log(error.message)
        
      }
    }
    find()

  })



//Find Student or Check Presence of Student
  const handleFinde = async(event)=>{
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log("this is attendence foem",formJson);
    try {
      setLoading(true)
      let response = await axios.post('http://localhost:5000/api/checkattendence',formJson,headers);
      setLoading(false)
      if(response.data.error){
        handleClose()
        Swal.fire({
          position: "top-",
          icon: "error",
          title: `${response.data.error}`,
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        handleClose()
        Swal.fire({
          position: "top-",
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 2500
        });
      }
      console.log(response.data)
    } catch (error) {
      handleClose()
      console.log("unable to Find ",error.message);
      Swal.fire({
        position: "top-",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500
      });
      
    }


  }









  const handleClose = () => {
    setRemove(false)
    setOpen(false);
    setAttendence(false)
  };
  const openForm= ()=>{
   setOpen(true)
   
  }
  const checkAtten = ()=>{
    setAttendence(true)
  }
  const removeForm = ()=>{
    setRemove(true)
  }




//Delete Student Record From the Databse
  const handleRemove = async(event)=>{
    event.preventDefault()
   
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    try {
      setLoading(true)
      let response = await axios.post('http://localhost:5000/api/updatestudent',formJson,headers)
      setLoading(false)
      
      console.log(response.data)
      if(response.data.error){
        handleClose()
        Swal.fire({
          position: "top-",
          icon: "error",
          title: `${response.data.error}`,
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        handleClose()
        Swal.fire({
          position: "top-",
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      handleClose()
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



//Add a New Student To The Database
  const handleSubmit = async(event)=>{
   
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
    const formjson = await Student.isValid(formJson)
    if(!formjson){
      handleClose();
      Swal.fire({
        text:'invalid credentials',
        icon:'warning',
        confirmButtonAriaLabel:"true"
      })
      return ;
    }
    console.log(formjson);
    try {
      setLoading(true)
      let response = await axios.post('http://localhost:5000/api/addstudent',formJson,headers);
      setLoading(false)
    
      if(response.data.error){
        handleClose()
        Swal.fire({
          position: "top-",
          icon: "error",
          title: `${response.data.error}`,
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        handleClose()
        Swal.fire({
          position: "top-",
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      }
      console.log(response.data)
    } catch (error) {
      handleClose()
      console.log("unable to resister ",error.message);
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
    <>
   
    <div className={css.container}>

      <div className={css.row1}>
        <div className={css.box} onClick={openForm}>
          <h3>Add More Student</h3>
          <p>Click here to add More 
          student to the records.currently there are <small>student</small></p>
        </div>
        <div className={css.box} onClick={removeForm} >
          <h3>Remove student</h3>
          <p>Click here to remove an student record from the database</p>
        </div>
        <div className={css.box} onClick={checkAtten}>
          <h3>Analysis</h3>
         <p> Check the Presence of Student on perticular date.</p>
        </div>
      </div>


      <div className={css.row1}>
      <div className={css.box}>
          <h3>Total Students</h3>
          <p>Students: {Students}</p>
        </div>
      
      </div>
      <div>


      </div>

    </div>




    <Dialog open={attendence} onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
        handleFinde(event)
      
          
        },
      }}>
        <DialogTitle><h3>Enter the details</h3></DialogTitle>
        <DialogContent sx={{gap:'10px'}}>
          <TextField margin='dense' fullWidth name='Date' type='date' required 
          ></TextField>
          <TextField  fullWidth  margin='dense' name='Phone' type='phone' required label="Please enter Phone"
          ></TextField>
        </DialogContent>

        <DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button variant='contained' type="submit">{Loading?<BeatLoader/>:'Find'}</Button>
       </DialogActions>
      
    </Dialog>



    <Dialog open={remove} onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
        handleRemove(event)
          
        },
      }}>
        <DialogTitle><h3>Enter phone Number</h3></DialogTitle>
        <DialogContent>
          <TextField  fullWidth name='Phone' type='phone' required label='enter the phone number'></TextField>
        </DialogContent>

        <DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button variant='contained' type="submit">{Loading?<BeatLoader/>:'Remove'}</Button>
       </DialogActions>
      
    </Dialog>





    <React.Fragment>
     
     <Dialog
     
       open={open}
       onClose={handleClose}
       PaperProps={{
         component: 'form',
         onSubmit: (event) => {
          handleSubmit(event)
           
         },
       }}
     >
       <DialogTitle> <h2>Kindly fill the form</h2></DialogTitle>
       <DialogContent>
         <TextField
           
           required
           margin="dense"
           id="name"
           name="Name"
           label="Student Name"
           type="text"
           fullWidth
           variant="standard"
         />
         <TextField
           
           required
           margin="dense"
           id="phone"
           name="Mobile"
           label="phone number"
           type="phone"
           fullWidth
           variant="standard"
         />
         
  <select style={{height:'39px',marginTop:'33px',width:'106px',borderRadius:'12px'}} name="Year" >
    <option value={null}>choose year</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
       </DialogContent>
       <DialogActions sx={{margin:'0px 5px 15px 0px'}}>
         <Button onClick={handleClose}>Cancel</Button>
         <Button variant='contained' type="submit">{Loading?<BeatLoader/>:'Resister'}</Button>
       </DialogActions>
     </Dialog>
   </React.Fragment>
    
    </>
  )
}

export default Land
