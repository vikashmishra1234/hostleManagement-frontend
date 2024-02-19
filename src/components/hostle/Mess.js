import { Paper } from "@mui/material";
import React from "react";
import css from "./css/Mess.module.scss";
import Rajma from "./css/utils/rajma.jpg";
import Fade from "react-reveal/Fade";

const Mess = () => {
  return (
      <div className={`${css.wrapper}`}>
        <h2>our menu</h2>
        <div className={`${css.container}`}>
          
            <Fade duration={100}>
                <Paper  sx={{width:{xs:'70vw',sm:'30vw',md:'20vw'},backgroundColor:'aqua',height:'fit-content',textAlign:'center'}}   elevation={10}>
                 
                    <h3>Kadi (Mon)</h3>

                    <img src={Rajma} />
                    <p>
                      Flavorful red kidney in tomato
                      based gravy with spices
                    </p>
                
                </Paper>
            </Fade>
            
         
            <Fade duration={500}>
                <Paper sx={{width:{xs:'70vw',sm:'30vw',md:'20vw'},backgroundColor:'aqua',height:'fit-content',textAlign:'center'}}   elevation={10}>
                 
                    <h3>Rajma Chawal</h3>
                    <img src={Rajma} />
                    <p>
                      Flavorful red kidney in tomato
                      based gravy with spices
                    </p>
                
                </Paper>
            </Fade>
         
         
            <Fade duration={800}>
                <Paper sx={{width:{xs:'70vw',sm:'30vw',md:'20vw'},backgroundColor:'aqua',height:'fit-content',textAlign:'center'}}   elevation={10}>
             
                    <h3>Rajma Chawal</h3>
                    <img src={Rajma} />
                    <p>
                      Flavorful red kidney in tomato
                      based gravy with spices
                    </p>
                 
                </Paper>
            </Fade>
       
        </div>
        <div className={`${css.container}`}>
          
            <Fade duration={1200}>
                <Paper sx={{width:{xs:'70vw',sm:'30vw',md:'20vw'},backgroundColor:'aqua',height:'fit-content',textAlign:'center'}}   elevation={10}>
                
                    <h3>Rajma Chawal</h3>

                    <img src={Rajma} />
                    <p>
                      Flavorful red kidney in tomato
                      based gravy with spices
                    </p>
                
                </Paper>
           
            </Fade>
          
         
            <Fade duration={1500}>
              
                <Paper sx={{width:{xs:'70vw',sm:'30vw',md:'20vw'},backgroundColor:'aqua',height:'fit-content',textAlign:'center'}}   elevation={10}>
                  
                    <h3>Rajma Chawal</h3>
                    <img src={Rajma} />
                    <p>
                      Flavorful red kidney in tomato
                     based gravy with spices
                    </p>
               
                </Paper>
            
            </Fade>
        
          
            <Fade duration={2000}>
                <Paper sx={{width:{xs:'70vw',sm:'30vw',md:'20vw'},backgroundColor:'aqua',height:'fit-content',textAlign:'center'}}   elevation={10}>
              
                 
                    <h3>Rajma Chawal</h3>
                    <img src={Rajma} />
                    <p>
                      Flavorful red kidney in tomato
                      based gravy with spices
                    </p>
                
              
                </Paper>
            </Fade>
        
        </div>
      </div>
  );
};

export default Mess;
