import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    left: 2em;
    top: 20%;
    padding: 0.5em 0.2em;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    hr{
        background-color: #B7ADAD;
        width: 0.11em;
        height: 5em;
        border: none;
        border-radius: 5px;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 0.9em;
        font-size: 1.06em;
        color: #b7adad;
    }
`