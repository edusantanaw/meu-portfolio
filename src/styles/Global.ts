import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

}
body{
    scroll-behavior: smooth;
    background-color: #000;
    .show{
        animation: animate 0.7s 0.1s ease-in-out forwards;
    }
}
a{
    text-decoration: none;
}

li{
    list-style: none;
}
`

export const SecondaryTitle = styled.h2`
    font-size: 3em;
`
export const SubTitle = styled.h3`
    font-size: 2em;
`
