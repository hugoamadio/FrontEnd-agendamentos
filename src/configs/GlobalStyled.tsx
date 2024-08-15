import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        border: 0px;
        font-family: 'Poppins', sans-serif, Courier, monospace;
    }

    ul[aria-label="Select minutes"] {
    display: none;
    }

    #root{
        width: 100%;
    }

`;

export default GlobalStyled;
