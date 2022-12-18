import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 40vh;
    color:#fff;
    background-color: #000;
    padding: 0 6em;

    h3{
        margin-top: 2.5em;
    }
`

export const List = styled.ul`
    display: flex;
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