import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    left: 2em;
    top: 34%;
    padding: 0.5em 0.2em;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    ul{
        display: flex;
        flex-direction: column;
        gap: 0.9em;
        font-size: 1.06em;
        color: #b7adad;

        svg{
            transition: 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
            &:hover{
                transform: translate3d(5px, -3px, 0)
            }
        }
    }

    @media (max-width: 550px){
        position: relative;
        justify-content: center;
        top:0;
        left: 0;
        ul{
            justify-content: center;
            flex-direction: row;
            gap: 2em;
            svg{
                font-size: 1.4em;
            }
        }
}
`