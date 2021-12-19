import React from "react";
import pic from "../images/Michelin.jpg";
import { StyledAbout } from "./styles/About.styled";
import { Flex, FlexContainer } from "./styles/Flex.styled";
import { StyledImage } from "./styles/Image.styled";

//all of this information is unique to this page so this is what we got.
export default function AboutMe() {
  return (
    <StyledAbout>
      <h1>About me!</h1>
      <Flex>
        {/* main div holds my description and the list of my "qualifications" */}
        <FlexContainer pad="0px 100px 0px 10px">
          <p>
            After having studied abroad here in Rome these past few weeks I have
            become an expert in (eating) Authentic italian cuisine. Here's a
            picture of me at a (former) Michelin star restaurant.
          </p>
          <br />
          <h2>My cooking qualifications:</h2>
          <ul>
            <li>
              I've already spent several hundred dollars on food here in Rome
            </li>
            <li>
              I worked at an italian restaurant the past few summers back home
            </li>
            <li>
              I made pasta somewhat frequently when living in SLO last year
            </li>
            <li>I have never fried anything in my life but it seems fun</li>
            <li>I've watch an unnecessary amount of Food Network</li>
          </ul>
        </FlexContainer>
        {/* side div holds the image */}
        <FlexContainer>
          <StyledImage
            src={pic}
            alt="Me sitting awkwardly in a chair at a nice restaurant"
            maxW="400px"
            maxH="400px"
          />
        </FlexContainer>
      </Flex>
    </StyledAbout>
  );
}
