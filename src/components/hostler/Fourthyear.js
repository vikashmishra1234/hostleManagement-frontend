import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import css from '../hostle/css/Firstyear.module.scss';
import Swl from 'sweetalert2';


const Fourthyear = () => {
    const [studentData,setStudentData]= useState([]);
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
                  let response =await axios.get('https://attendencebackend-23tk.onrender.com/api/getstudent',headers);
                  setStudentData(response.data)
                 console.log("this is student data",studentData);
               
                  
              } catch (error) {
                  console.log(error.message);
                  
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
        
        console.log(Data)
        try {
          const response=await axios.post('https://attendencebackend-23tk.onrender.com/api/markattendece4',Data,headers);
          console.log(response.data);
          if(response.data.success){
            Swl.fire({
              position: "top-",
              icon: "success",
              title: `${response.data.message}`,
              showConfirmButton: false,
              timer: 1500
            });
          }
          else{
            Swl.fire({
                position: "top-",
                icon: "error",
                title: `${response.data.error}`,
                showConfirmButton: false,
                timer: 1500
              });
          }
        } catch (error) {
          console.log("unable to send data",error.message);
          
        }
  
      }
  
    return (
     
      
        <div className={css.container }>
        <table cellSpacing={0} border={'1px'}>
          <tr>
            <th>Student Name</th>
            <th>Mobile</th>
            <th colSpan={2}>Status</th>
          </tr>
  
          {
            studentData.map(student=>(
                student.Year=='4'?
              <tr>
                <td>{student.Name}</td>
                <td>{student.Mobile}</td>
                <td><button ref={btnRef} className={css.btn} value={'present'} onClick={(e)=>{markPresent(e,student.Name,student.Mobile)}}>P</button></td>
                <td><button ref={btnRef} className={css.btn} value={'absent'} onClick={(e)=>{markPresent(e,student.Name,student.Mobile)}}>A</button></td>
              </tr>:''
            ))
          }
          
        </table>
      </div>
      
  )
}

export default Fourthyear;
