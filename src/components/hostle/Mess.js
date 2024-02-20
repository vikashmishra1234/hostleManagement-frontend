import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img1 from "./css/utils/img1.jpg"

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: {xs:'80vw',sm:'30vw',md:345} }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         { props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">View More</Button>
      </CardActions>
    </Card>
  );
}