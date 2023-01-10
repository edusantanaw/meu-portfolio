import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0 6em 6em 6em;
    background-color:#000;
    color: #fff;
    display: flex;
    opacity: 0;
    overflow: auto;


    #ref{
        align-self: center;
    }
    .me{
        display: flex;
        width: 40em;
        justify-content: center;
    }
    img{
        height: 30em;
    }
    .summary{
        margin-top: 2em;
        width: 90%;
    }
    p{
        color: #B7ADAD;
    }
    .infos{
        margin-top: 2em;
        ul{
            padding-left: 1em;
            display: flex;
            flex-direction: column;
            gap: 0.5em;
            margin-top: 1em;
            li{
                list-style: circle inside;
                color: #b7adad;
                span{
                    color: #fff;
                    font-weight: 700;
                    padding-right: 0.5em;
                }
            }
        }
    }
    h3{
            font-size: 2em;
            color: #FF5C00;
        }

        @media (max-width: 880px){
            .me{
                display: none;
            }
        }

        @media (max-width: 550px){
            padding: 0 1em 1em 1em;
        }
`