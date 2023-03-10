import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0 6em 0 6em;
    background-color: #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    animation: home 1.1s 0s ease-in-out forwards;
    .who{
        padding-top: 1em;
        display: flex;
        flex-direction: column;
        gap: 0;
        color: #fff;
        svg{
            font-size: 1.5em;
            color: #FF5C00;
        }
        div{
            margin-top: 1em;
            display:flex;
            align-items: center;
            gap: 1em;
            padding-bottom: 2em;
            span{
                font-size: 1.1em;
                color: #B7ADAD;
                letter-spacing: 0.2em;
                font-weight: 500;
            }
        }
    }

    @keyframes home {
        from{
            opacity: 0;
            transform: translate3d(0px,-60px, 0);
        }
        to{
            opacity: 1;
            transform: translate3d(0px,0, 0)
        }
    }
    @media (max-width: 550px){
            padding: 2em 1em 1em 1em;
        }
`

export const Title = styled.h1`
    font-size: 4em;
    font-weight: 600;
    color: #fff;
    line-height: 1em;
    letter-spacing: 5px;
`

export const SubTitle = styled.h2`
    font-size: 2.3em;
    color: #FF5C00;
    padding-top:0.2em;
    letter-spacing: 0.2em;
`

export const Span = styled.span`
    color: #B7ADAD;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 01em;
`

export const Button = styled.button`
    width: 14em;
    padding: 0.8em 0;
    background-color: #FF5C00;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 5px;
    border: 2px solid #FF5C00;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        opacity: 0.7;
    }
`