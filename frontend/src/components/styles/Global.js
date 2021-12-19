import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme}) => theme.colors.body};
    }
`

export default GlobalStyles;