import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import history from './history';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function navbar() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Vboo's Car Blog
          </Typography>
          {/* <Button onClick={() => history.push('/')} color="inherit">Home</Button> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
