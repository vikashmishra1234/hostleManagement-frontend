import { Paper } from "@mui/material";
import React from "react";
import css from "./css/Mess.module.scss";
import Rajma from "./css/utils/rajma.jpg";
import Fade from "react-reveal/Fade";

const Mess = () => {
  return (
    <div className={`${css.block}`}>
      

      <div className={`${css.wrapper}`}>
        <div className={`${css.container}`}>
          <div className={`${css.block1}`}>
            <Fade duration={100}>

            <div className={`${css.card}`}>
              <Paper elevation={10}>
                <div>
                  <h3>Kadi  (Mon)</h3>

                  <img src={Rajma} />
                  <p>
                    Flavorful red kidney in tomato <br />
                    based gravy with spices
                  </p>
                </div>
              </Paper>
            </div>
            </Fade>
          </div>
          <div className={`${css.block1}`}>
            <Fade duration={500}>

            <div className={`${css.card}`}>
              <Paper elevation={10}>
                <div>
                  <h3>Rajma Chawal (Tue)</h3>
                  <img src={Rajma} />
                  <p>
                    Flavorful red kidney in tomato
                    <br /> based gravy with spices
                  </p>
                </div>
              </Paper>
            </div>
            </Fade>
          </div>
          <div className={`${css.block1}`}>
              <Fade duration={800}>

            <div className={`${css.card}`}>
              <Paper elevation={10}>
                <div>
                <h3>Rajma Chawal (Tue)</h3>
                  <img src={Rajma} />
                  <p>
                    Flavorful red kidney in tomato <br />
                    based gravy with spices
                  </p>
                </div>
              </Paper>
            </div>
              </Fade>
          </div>
        </div>
        <div className={`${css.container}`}>
          <div className={`${css.block1}`}>
            <Fade duration={1200}>

            <div className={`${css.card}`}>
              <Paper elevation={10}>
                <div>
                <h3>Rajma Chawal (Tue)</h3>

                  <img src={Rajma} />
                  <p>
                    Flavorful red kidney in tomato <br />
                    based gravy with spices
                  </p>
                </div>
              </Paper>
            </div>
            </Fade>
          </div>
          <div className={`${css.block1}`}>
            <Fade duration={1500}>

            <div className={`${css.card}`}>
              <Paper elevation={10}>
                <div>
                <h3>Rajma Chawal (Tue)</h3>
                  <img src={Rajma} />
                  <p>
                    Flavorful red kidney in tomato
                    <br /> based gravy with spices
                  </p>
                </div>
              </Paper>
            </div>
            </Fade>
          </div>
          <div className={`${css.block1}`}>
            <Fade duration={2000}>

            <div className={`${css.card}`}>
              <Paper elevation={10}>
                <div>
                <h3>Rajma Chawal (Tue)</h3>
                  <img src={Rajma} />
                  <p>
                    Flavorful red kidney in tomato <br />
                    based gravy with spices
                  </p>
                </div>
              </Paper>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mess;
