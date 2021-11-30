import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CarPreview from './carPreview';
import { menuItemClasses } from '@mui/material';
import { useLocation } from 'react-router-dom'

import  { useState } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function CarDetails() {
  const [newCarSpec, setNewCarSpec] = React.useState('');
  const [newCarFact, setNewCarFact] = React.useState('');
  const location = useLocation()
  const { from } = location.state 
  return (
  <div>
    <div>
      <Typography  paddingBottom="10px" align="center" variant="h5" component="div">{from.carName}</Typography>
      <Typography>{from.briefDescription}</Typography>
      <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={from.imageID}
                        alt="green iguana"
                    />   
          </Card>
    </div>  
    <div>
      <Typography paddingBottom="10px" align="start" variant="h5" component="div">Car Specs</Typography>
      {from.carSpecs.map(item => {
        console.log(item);
        return (
          <li>{item}</li>

        )
      })}
    </div>
    <div>
    <input  placeholder="Add a car spec" value={newCarSpec} onChange={(e) => { 
      setNewCarSpec(e.target.value);
    }}
    />
    </div>
    <div>
      <Typography  paddingBottom="10px" align="start" variant="h5" component="div">Car Facts</Typography>
      {from.carFacts.map(item => {
        console.log(item);
        return (
          <li>{item}</li>

        )
      })}
    </div>
    <div>
    <input  placeholder="Add a car fact" value={newCarFact} onChange={(e) => { 
      setNewCarFact(e.target.value);
    }}    
    />
    </div>

  </div>
  );
}
