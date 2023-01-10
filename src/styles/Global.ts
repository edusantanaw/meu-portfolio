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
    .about, .contact{
        animation: animate 0.7s 0.1s ease-in-out forwards;
    }

    .projects, .tec {
        animation: animateProj 0.7s 0.1s ease-in-out forwards;
    }


    @keyframes animate {
            from{
                opacity: 0;
                transform: translate3d(-80px, 0px,0)
            }
            to{
                opacity: 1;
                transform: translate3d(0, 0px,0)
            }
       }
}
    @keyframes animateProj {
            from{
                opacity: 0;
                transform: translate3d(0px, 100px,0)
            }
            to{
                opacity: 1;
                transform: translate3d(0, 0px,0)
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
    color: #FF5C00;
`
