import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    }
        *, ::after, ::before {
            box-sizing: inherit;
    }

    body {
        font-family: 'Barlow', sans-serif;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.third};
        background-color: ${({ theme }) => theme.colors.primary};
        overflow-x: hidden;
    }
`;
