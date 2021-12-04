import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CarPreview from './carPreview';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function home() {
  return (
    <div>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography paddingBottom="10px" align="center" variant="h5" component="div">
          Welcome to my Car Blog!
        </Typography>
        <Typography align="left" variant="body1">
        Welcome and thanks for stopping by my car blog! I will post some of my favorite cars and information regarding their specs!
        </Typography>
        <Typography align="left" variant="body1">
        I have been interested in cars since I was 5 years old, and over the years my love and hate for certain cars has grown tremendously. This is why I am excited to share them with you!
        </Typography>
      </CardContent>
      <CardContent>
        <Typography paddingBottom="10px" align="center" variant="h5" component="div">
          The Cars!
        </Typography>
        <Typography align="left" variant="body1">
        Welcome and thanks for stopping by my car blog! I will post some of my favorite cars and information regarding their specs!
        </Typography>
        <Typography align="left" variant="body1">
        I have been interested in cars since I was 5 years old, and over the years my love and hate for certain cars has grown tremendously. This is why I am excited to share them with you!
        </Typography>
      </CardContent>
    </Card>
    <Typography paddingBottom="10px" align="center" variant="h5" component="div">
          Car Showcase
        </Typography>
    <CarPreview/>
    </div>
  );
}
