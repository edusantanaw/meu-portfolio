import styled from "styled-components";

export const Navegation = styled.header`
    width: 100%;
    background-color: #000;
    position: fixed;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 1.5em 3em;
    color: #fff;
    ul{
        display: flex;
        gap: 2em;
    }

    a{
        color: #fff;
        font-size: 1.2em;
    }
`