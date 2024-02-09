import React from "react";
import css from "./css/About.module.scss";
import Img1 from "./css/utils/img1.jpg";
import Img2 from "./css/utils/img2.jpeg";

const Aboutt = () => {
  return (
    <div>
      <div className={css.Container}>
        <h1>About Us</h1>
        <div className={css.block1}>
          <img src={Img1} />
          <p className={`${css.about}`}>
            At Bsa, we're more than   just a place to  <br /> stay – we're a
            vibrant community, a hub for  <br /> students from 
           all corners of the globe.  <br /> Nestled in   the heart of Mathura,  <br />
            our hostel
           offers an authentic and unforgettable <br /> experience for
            students seeking comfort,  <br />   connection,  and a home
            away from home.
          </p>
        </div>


        <div style={{display:'flex',flexDirection:'row-reverse'}} className={css.block1}>
          <img src={Img2} />
          <p className={`${css.about}`}>
          Founded in 1997, our journey began with <br /> a simple idea: to
          create a haven for <br /> wanderers, where cultures converge,
          friendships <br />  flourish,
         and memories are made. Over the years,
          <br /> we've welcomed countless guests, each adding a<br /> unique
          chapter to our story. From backpackers to
          <br />
          solo explorers, families, and groups <br /> of friends, everyone finds
          a place
          <br /> in our eclectic and inclusive environment.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutt;
