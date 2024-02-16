// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function FormDialog(props) {
//   const [open, setOpen] = React.useState(false);

//   setOpen(props.open)

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
     
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       PaperProps={{
//         component: 'form',
//         onSubmit: (event) => {
//          handleSubmit(event)
          
//         },
//       }}
//     >
//       <DialogTitle> <h2>Kindly fill the form</h2></DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           required
//           margin="dense"
//           id="name"
//           name="Name"
//           label="Student Name"
//           type="text"
//           fullWidth
//           variant="standard"
//         />
//         <TextField
//           autoFocus
//           required
//           margin="dense"
//           id="phone"
//           name="Mobile"
//           label="phone number"
//           type="phone"
//           fullWidth
//           variant="standard"
//         />
//         <TextField
//           autoFocus
//           required
//           margin="dense"
//           id='year'
//           name='Year'
//           label="Year"
//           type="select"
//           fullWidth
//           variant="standard"
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button type="submit">Resister</Button>
//       </DialogActions>
//     </Dialog>
//   </React.Fragment>
//   );
// }