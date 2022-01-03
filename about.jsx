import React from 'react';
import './style.css';
import Navbar from './navbar';

export default function AboutMe(index) {
   return (
      <div id = "body">
         <Navbar />
         <h1>I love exploring nature!</h1>
         <img src = "https://urnabios.com/wp-content/uploads/2015/04/angel_oak_tree.jpg"></img>
      </div>
   );
}
