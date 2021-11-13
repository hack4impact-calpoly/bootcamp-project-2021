import React from 'react';
import Image from '../IMG_7341 copy.jpeg'

export default function About() {
    return (
  // replace everything in between the <header> & <header /> tags
  // with your ABOUT code from your earlier milestones
        <div>
            <p id="important-text2">About the Chef</p>
            <section className="text">
                <div className="flex-container">
                    <img src={Image} className="myimg" alt="Master Chef Helen"/>
                    <div className="flex-header2">
                        <p>Helen Chan: a grandmother of four, a frying-pan conossieur, and a master in the kitchen. 
                            Born in Shanghai and raised in Hong Kong, Helen has mastered a variety of Chinese dishes, 
                            adding her own twists at the same time. For the past 27 years, she has taken care of her 
                            four grandchildren and raised them to be successful young adults. Her secret? A little bit
                            of love and some amazing home-cooked meals.</p>
                        <br />
                        <p>As her only grandson, I was always spoiled with the best pieces of meat, the crispy rice 
                            at the bottom of the pot, and always got out of eating my veggies. I can say with ease that
                            my grandmother cooks the best Chinese cuisine in the world!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );      
  }
