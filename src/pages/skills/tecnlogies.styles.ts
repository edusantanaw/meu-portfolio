import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    color:#fff;
    background-color: #000;
    padding: 0 6em;
    opacity: 0;
    padding-bottom: 2em;
    h3{
        margin-top: 2.5em;
    }

    @media (max-width: 700px) {
        padding: 0 2em;
    }

`

export const List = styled.ul`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    gap: 1.5em;
    padding-top: 2em;
`

export const Item = styled.li<{ color?: string }>`
    background-color: ${props => props.color ? props.color : '#a0a0a0'};
    padding: 0.6em 1em;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.8em;
    `