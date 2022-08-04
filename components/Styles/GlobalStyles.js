import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --red: crimson;
        --lightgray: #efeeee;
        --gray: #c9c9c9;
        --darkgray: #333333;
        --lightblue: lightblue;
    }
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: Verdana, Geneva, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
        line-height: 22px;
    }

    body {

    }

`;