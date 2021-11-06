import React from 'react';
import Overview from './Overview/Overview';
import blackberry from '../../images/blackberry-lime.jpg';
import Ingredients from './Ingredients/Ingredients';
import Preparation from './Preparation/Preparation';

export default function RecipePage() {
  return (
    <div>
        <Overview 
            image={blackberry}
            name="Blackberry Lime Smoothie"
            source="[Recipe from Two Peas & Their Pod]"
            description="This refreshing blackberry smoothie has a kick of lime. It is great for breakfast, snack time, or dessert!"
        /> 
        <Ingredients/>
        <Preparation/>
    </div>
  );
}
