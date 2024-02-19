import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import css from '../hostle/css/Firstyear.module.scss';
import Swl from 'sweetalert2';
import { BeatLoader } from 'react-spinners';
import { Dialog } from '@mui/material';


const Thirdyear = () => {
    const [studentData,setStudentData]= useState([]);
    const [Loader,setLoader] = useState(false)
    const btnRef = useRef();
      useEffect(()=>{
        
         const getStudent=async()=>{
          const headers = {
            headers:{
              "Authorization":`bearer ${localStorage.getItem("token")}`,
              "Content-Type":"application/json"
            }
          }
              try {
                setLoader(true)
                  let response =await axios.get('https://hostlebackend.onrender.com/api/getstudent',headers);
                  setLoader(false)
                  setStudentData(response.data)
                 console.log("this is student data",studentData);
               
                  
              } catch (error) {
                setLoader(false)
                Swl.fire({
                  position: "top-",
                  icon: "error",
                  title: `${error.message}`,
                  showConfirmButton: true,
                 
                });
                  
              }
  
         }
         getStudent();
      },[]);
  
      const markPresent = async(e,Name,mobile)=>{
        
        const Data = {
          Name:Name,
          Mobile:mobile,
          Status:e.target.value
        };
        const headers = {
          headers:{
            "Authorization":`bearer ${localStorage.getItem("token")}`,
            "Content-Type":"application/json"
          }
        }
     
        try {
          setLoader(true)
          const response=await axios.post('https://hostlebackend.onrender.com/api/markattendece3',Data,headers);
          setLoader(false)
          console.log(response.data);
          if(response.data.success){
            Swl.fire({
              position: "top-",
              icon: "success",
              title: `${response.data.message}`,
              showConfirmButton: true,
             
            });
          }
          else{
            Swl.fire({
                position: "top-",
                icon: "error",
                title: `${response.data.error}`,
                showConfirmButton: true,
               
              });
          }
        } catch (error) {
          setLoader(false)
          Swl.fire({
            position: "top-",
            icon: "error",
            title: `${error.message}`,
            showConfirmButton: true,
           
          });
          
        }
  
      }
  
    return (
     
      
        <div className={css.container }>
          <Dialog open={Loader}>
            <div style={{padding:'30px'}}>
              <BeatLoader></BeatLoader>
            </div>
          </Dialog>
        <table cellSpacing={0} border={'1px'}>
          <tr>
            <th>Student Name</th>
            <th>Mobile</th>
            <th colSpan={2}>Status</th>
          </tr>
  
          {
            studentData.map(student=>(
                student.Year=='3'?
              <tr>
                <td>{student.Name}</td>
                <td>{student.Mobile}</td>
                <td><button ref={btnRef} id={css.pres} className={css.btn} value={'present'} onClick={(e)=>{markPresent(e,student.Name,student.Mobile)}}>P</button></td>
                <td><button ref={btnRef} id={css.abs} className={css.btn} value={'absent'} onClick={(e)=>{markPresent(e,student.Name,student.Mobile)}}>A</button></td>
              </tr>:''
            ))
          }
          
        </table>
      </div>
      
  )
}

export default Thirdyear
