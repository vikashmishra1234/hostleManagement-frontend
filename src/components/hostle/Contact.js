import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import css from "./css/Contact.module.scss";

const Contact = () => {
  return (
    <div className={css.container}>
        <h1>Register Now</h1>
      <div className={css.form}>
        <Paper variant="outlined" elevation={8}>

        <form action="">
        <TextField label="Name" required variant="outlined" />
        <TextField label="email" required variant="outlined" />
        <TextField label="phone" required variant="outlined" />
        <TextField label="year of studying" required variant="outlined" />
        <Button variant="contained" type="submit">Register</Button>
        </form>
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
