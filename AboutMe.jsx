import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { renderMatches } from 'react-router';

export default function AboutMe() {
console.log("i am here");
  return (
    <div>
       <Typography paddingBottom="10px" paddingTop="10px" align="left" variant="h5" component="div">
          About Me
        </Typography>
        <Typography align="left" variant="body1">
        My Name is Vaibhav and I am a first year computer science student at Cal Poly San Luis Obispo. 
        I have been interested in cars since I was 5 years old, and have been avidly researching them the last few years.
        </Typography>

       
    </div>
  );
}
