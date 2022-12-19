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
`