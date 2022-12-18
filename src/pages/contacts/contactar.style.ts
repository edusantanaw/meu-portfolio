import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0 6em;
    background-color: #000;
    color: #fff;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`

export const Form = styled.form`

    width: 30em;
    display: flex;
    flex-direction: column;
    gap: 2.4em;
    div{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    label{
        font-size: 1.2em;
        display: flex;
        align-items:center;
        gap: 0.6em;
    }
    input[type="text"], textarea{
        height: 2.5em;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #fff;
    }

    button{
        align-self: flex-end;
        margin-top:1em;
        width: 50%;
        height: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FF5C00;
        border: none;
        color: #fff;
        gap: 1em;       
        cursor: pointer; 
        border-radius: 5px;
        svg{
            font-size: 2em;
        }
    }

`