import styled from "styled-components";

export const Navegation = styled.header`
    width: 100%;
    background-color: #000;
    position: fixed;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: .8em 6em;
    color: #fff;
    z-index: 3;
    ul{
        display: flex;
        gap: 2em;
    }

    a{
        color: #fff;
        font-size: 1.2em;
        transition: 0.4s ease-in-out;
        &:hover{
            color: #FF5C00;
        }

       
    }
    li{
        position: relative;
    
        &::after{
            content: " ";
            height: 2px;
            width: 0%;
            background-color: #FF5C00;
            color: blue;
            top: 26px;
            left: 0;
            position: absolute;
            transition: 0.4s ease-in-out;
        }

        &:hover::after{    
            width: 100%;
        }
    }

    #hamb {
        font-size: 2em;
        border-radius: 15px;
        display: none;
        cursor: pointer;
    }

    #close{
        font-size: 2.5em;
        position: absolute;
        top: 10px;
        left: 0.1em;
        color: red;
        cursor: pointer;
    }

    @media (max-width: 650px){
        padding: 1em;
        ul{
            display: none;
        }
        .menu{
            padding: 3em 1em 1em 2em;
            position: fixed;
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 100vh;
            right: 0;
            top: 0;
            background-color: #0f0f0f;

            li{
                font-size: 1.6em;
            }
            li::after{
                content: none;
                width: 0;
            }
        }
        #hamb{
            display: block;
        }
    }
`