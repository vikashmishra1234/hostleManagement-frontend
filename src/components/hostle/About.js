import React from "react";
import css from "./css/About.module.scss";
import Img1 from "./css/utils/img1.jpg";
import Img2 from "./css/utils/img2.jpeg";
import Fade from "react-reveal/Fade";

const Aboutt = () => {
  return (
    <div>
      <div className={css.Container}>
       <Fade  duration={2000}><h1>About Us</h1></Fade> 
        <div className={css.block1}>
          <Fade  duration={1500}>

          <img src={Img1} />
          </Fade>
          <Fade  duration={1500}>

          <p className={`${css.about}`}>
            At Bsa, we're more than   just a place to   stay – we're a
            vibrant community, a hub for   students from 
           all corners of the globe.   Nestled in   the heart of Mathura,  
            our hostel
           offers an authentic and unforgettable  experience for
            students seeking comfort,     connection,  and a home
            away from home.
          </p>
          </Fade>
        </div>


        <div className={css.block1}>
          <Fade duration={1500}>

          <img src={Img2} />
          </Fade>
          <Fade>

          <p className={`${css.about}`}>
          Founded in 1997, our journey began with  a simple idea: to
          create a haven for  wanderers, where cultures converge,
          friendships   flourish,
         and memories are made. Over the years,
           we've welcomed countless guests, each adding a unique
          chapter to our story. From backpackers to
          
          solo explorers, families, and groups  of friends, everyone finds
          a place
           in our eclectic and inclusive environment.
        </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Aboutt;
