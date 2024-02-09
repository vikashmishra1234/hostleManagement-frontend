import React from 'react'
import css from './css/Card.module.scss'
import Rajma from "./css/utils/rajma.jpg";
import Fade from "react-reveal/Fade";
import { Paper } from '@mui/material';

const Card = () => {
  return (
    <Fade duration={100}>
              <div className={`${css.card}`}>
                <Paper elevation={10}>
                  <div>
                    <h3>Shahi Paneer</h3>

                    <img src={Rajma} />
                    <p>
                      Flavorful red kidney in tomato <br />
                      based gravy with spices
                    </p>
                  </div>
                </Paper>
              </div>
            </Fade>
  )
}

export default Card
