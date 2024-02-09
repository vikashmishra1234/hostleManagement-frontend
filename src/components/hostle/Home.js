import React from "react";
import { Typewriter } from "react-simple-typewriter";
import css from "./css/Home.module.scss";
import { MdOutlineSportsTennis } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import Fade from "react-reveal/Fade";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Home = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <div className={`${css.block1}`}>
          <Typewriter words={["Welcome to Bsa Hostle"]} loop={false} />
        </div>
        <div className={`${css.block2}`}>
          <div className={`${css.info}`}>
            <Fade left duration={2000}>
              <span>
                <MdOutlineWorkspacePremium /> Get Premium Facility
              </span>
            </Fade>
            <Fade left duration={1600}>
              <span>
                <MdOutlineBedroomChild /> Better Room Qaulity
              </span>
            </Fade>
            <Fade left duration={1200}>
              <span>
                <MdOutlineSportsTennis /> Provide Sport Equipment
              </span>
            </Fade>
            <Fade left duration={800}>
              <span>
                <FaWifi /> Free Wi-Fi 24*7
              </span>
            </Fade>
            <Fade left duration={500}>
              <span>
                <MdOutlineElectricBolt /> 24-hour electricity
              </span>
            </Fade>
            <Fade left duration={200}>
              <span>
                <FaExclamationCircle /> Ragging Free Campus
              </span>
            </Fade>
          </div>
          <div className={`${css.contact}`}>
            <Fade bottum duration={2000}>
              <span>
                <>Feel Free To Contact</>
              </span>
            </Fade>
            <Fade bottum duration={1500}>
              <span>
                <><MdLocationOn /> New Bus Stand, Mathura</>
              </span>
            </Fade>
            <Fade bottum duration={1000}>
              <span><MdEmail /> vikashmishra8371@gmail.com </span>
            </Fade>
            <Fade bottum duration={500}></Fade>
            <span className={`${css.icons}`}> 
            <IoLogoWhatsapp />
            <FaInstagram />
            <FaFacebook />
              
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
