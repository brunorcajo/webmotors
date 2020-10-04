import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    .hide{
        display: none !important;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0 none;
      }

    html{
        font-size: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
            font-size: 13px;
        }
    }

    body{
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.wildSand};
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
