import React from 'react';
import './aboutMe.css'

export default function About() {
  return (
    <div className='main'>
        <div>
            <h2 className='display sectionHeader'>About Me</h2>
            <p className='display'>I'm currently studying abroad in Rome, Italy during Fall 2021. This trip inspired me to create an Italian food themed page! 
                    I've absolutely loved being imemrsed in Italian culture, and much of the culture revolves around food! My favorite foods thus far have been 
                    different kinds of pasta, pizza and (most importantly) gelato!</p>
            <div className='display imageGallery'>
                <img src='/frigidarium.JPG' width='225px' height='300px' alt='me'/>
                <img src='/group.JPG' width='400px' height='300px' alt='group'/>
                <img src='/group3.JPG' width='400px' height='300px' alt='group3'/>
            </div>
        </div>
        <div className='qualifications display'>
            <h2 className='sectionHeader'>My Qualifications</h2>
            <ul className='qualificationsList'>
                <li>Ratatouille just might be my favorite movie</li>
                <li>I can order a cappuccino to-go in Italian, maybe that translates to Italian cooking...?</li>
                <li>I've been cooking for myself for a couple years now</li>
                <li>I consider myself an expert at making TraderJoes' frozen meals</li>
                <li>*I'm not qualified to tell people how to make these dishes so take my advice with caution :)</li>
            </ul>
        </div>
    </div>
  );
}