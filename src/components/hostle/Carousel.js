import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, Box, Typography } from "@mui/material";
import In1 from "./css/utils/in1.png";
import In2 from "./css/utils/in2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Paper } from "@mui/material";

export default function App() {
  return (
    <>
      <Box sx={{ paddingTop: "20px", height: { xs: "119vw", sm: "100vh" } }}>
        <Typography
          sx={{
            fontWeight: "550",
            fontSize: { xs: "6vw", sm: "3vw" },
            paddingLeft: "32px",
          }}
          variant="h3"
        >
          What Student Think About Us...
        </Typography>

        <Swiper
          style={{ height: "87%", paddingBottom: "30px", textAlign: "center" }}
          autoplay={{
            delay: "2500",
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                width: { xs: "69vw", sm: "40vw" },
                position: "absolute",
                left: "14%",
                top: "6%",
              }}
            >
              <Paper
                elevation={12}
                sx={{
                  height: "fit-content",
                  padding: "20px",
                  fontSize: { xs: "3.8", sm: "1.56vw" },
                }}
              >
                <img style={{ height: "20px" }} src={In1} alt="" />
                The hostel offers a vibrant community atmosphere with engaging
                events and a conducive study environment.
                <img style={{ height: "15px" }} src={In2} alt="" />
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  height: "fit-content",
                  fontSize: "20px",
                  gap: "15px",
                  marginTop: "30px",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ height: { xs: "54px", sm: "62px" }, width: {xs:'57px',sm:'60px'} }}
                >
                  V
                </Avatar>
                <Box sx={{ marginBottom: "20px", fontSize: { xs: "16px" } }}>
                  Vikash Mishra{" "}
                  <small style={{ display: "block" }}>Studying</small>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                width: { xs: "69vw", sm: "40vw" },
                position: "absolute",
                left: "14%",
                top: "6%",
              }}
            >
              <Paper
                elevation={12}
                sx={{
                  height: "fit-content",
                  padding: "20px",
                  fontSize: { xs: "3.8", sm: "1.56vw" },
                }}
              >
                <img style={{ height: "20px" }} src={In1} alt="" />
                Security measures are effective, with vigilant personnel and
                accessible emergency protocols.
                <img style={{ height: "15px" }} src={In2} alt="" />
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  height: "fit-content",
                  fontSize: "20px",
                  gap: "15px",
                  marginTop: "30px",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ height: { xs: "54px", sm: "62px" }, width: {xs:'57px',sm:'60px'} }}
                >
                  A
                </Avatar>
                <Box sx={{ marginBottom: "20px", fontSize: { xs: "16px" } }}>
                  Amit Sharma
                  <small style={{ display: "block" }}>Pass Out</small>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                width: { xs: "69vw", sm: "40vw" },
                position: "absolute",
                left: "14%",
                top: "6%",
              }}
            >
              <Paper
                elevation={12}
                sx={{
                  height: "fit-content",
                  padding: "20px",
                  fontSize: { xs: "3.8", sm: "1.56vw" },
                }}
              >
                <img style={{ height: "20px" }} src={In1} alt="" />
                The staff members are approachable, provide prompt assistance,
                and exhibit professional conduct.
                <img style={{ height: "15px" }} src={In2} alt="" />
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  height: "fit-content",
                  fontSize: "20px",
                  gap: "15px",
                  marginTop: "30px",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ height: { xs: "54px", sm: "62px" }, width: {xs:'57px',sm:'60px'} }}
                >
                 R
                </Avatar>
                <Box sx={{ marginBottom: "20px", fontSize: { xs: "16px" } }}>
               Rakesh gaur
                  <small style={{ display: "block" }}>Pass Out</small>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                width: { xs: "69vw", sm: "40vw" },
                position: "absolute",
                left: "14%",
                top: "6%",
              }}
            >
              <Paper
                elevation={12}
                sx={{
                  height: "fit-content",
                  padding: "20px",
                  fontSize: { xs: "3.8", sm: "1.56vw" },
                }}
              >
                <img style={{ height: "20px" }} src={In1} alt="" />
                The room is spacious with comfortable beds, clean facilities,
                and a cozy ambiance.
                <img style={{ height: "15px" }} src={In2} alt="" />
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  height: "fit-content",
                  fontSize: "20px",
                  gap: "15px",
                  marginTop: "30px",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ height: { xs: "54px", sm: "62px" }, width: {xs:'57px',sm:'60px'} }}
                >
                  A
                </Avatar>
                <Box sx={{ marginBottom: "20px", fontSize: { xs: "16px" } }}>
                 Ajay Kant
                  <small style={{ display: "block" }}>Pass Out</small>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

         

          
        </Swiper>
      </Box>
    </>
  );
}
