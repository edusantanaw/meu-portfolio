import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0 6em;
    background-color: #000;
    color: #fff;
    height: 100vh;
`

export const CardList = styled.div`
    width: 100%;
    height: 80vh;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 1em;
    .image{
        img{
            width: 28em;
            height: 18em;
            object-fit: cover;
            border-radius: 5px;
        }
    }
`