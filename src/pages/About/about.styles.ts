import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0 6em;
    background-color:#000;
    color: #fff;
    height: 100vh;
    display: flex;
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
        h3{
            font-size: 2em;
        }
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
        }
        
`