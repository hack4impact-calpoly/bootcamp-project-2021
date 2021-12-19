import React from "react";
import { StyledLink } from "./styles/Link.styled";
import { Flex, FlexContainer } from "./styles/Flex.styled";
import { StyledRecipePreview } from "./styles/RecipePreview.styled";
import { StyledImage } from "./styles/Image.styled";

export default function RecipePreview({ name, desc, image }) {
  return (
    <StyledRecipePreview>
      <h3>
        <StyledLink to={"/recipes/" + name} fs="Larger" ml="5px">
          {name}
        </StyledLink>
      </h3>
      <Flex>
        {/* another side - main combo, the side holds the image and the main holds the short description of the recipe*/}
        <FlexContainer flex="12%" pad="0px">
          <StyledImage src={image} alt={name} maxW="200px" maxH="200px" />
        </FlexContainer>
        <FlexContainer flex="88%" pad="0px 10px 0px 20px">
          <p>{desc}</p>
        </FlexContainer>
      </Flex>
    </StyledRecipePreview>
  );
}
