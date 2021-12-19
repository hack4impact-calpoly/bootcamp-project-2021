import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexContainer = styled.div`
  flex: ${({ flex }) => flex || '50%'};
  margin-bottom: auto;
  padding: ${({pad}) => pad};
`;
