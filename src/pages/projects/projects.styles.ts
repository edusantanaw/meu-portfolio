import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0 6em;
    background-color: #000;
    color: #fff;
    opacity: 0;
    h2{
        text-align: center;
        padding-bottom: 1em;
    }

    @media (max-width: 1100px){
        padding: 0 2em;
       }

       @media (max-width: 700px){
        padding: 0 2em;
       }
       @media (max-width: 530px){
        padding: 0;    
        }
    
`

export const CardList = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 2em;
    justify-content: space-around;

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }
    
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        @media (max-width: 1000px) {
            width: 100%;
           .image{
            justify-content: center;
            width: 80%;
            img{
                width: 80%;
                height: 20em;
            }
           }
        }

        @media (max-width: 700px){
            .image{
                width: 100%;
            }
        }

        @media (max-width: 520px){
            
            .image{
                position: relative;
                img{
                    width: 100%;
                    height: 30vh;    
                }
              
                #next, #prev{
                    position: absolute;
                    z-index: 2;
                    background-color: #FF5C00;
                    
                }
                #next{
                    right: 5px;
                }
                #prev{
                    left: 5px;
                }
            }
        }
    }
    .image{
        display: flex;
        align-items: center; 
        gap: 1em;
        img{
            width: 28em;
            height: 18em;
            object-fit: cover;
            border-radius: 5px;
        }
        #next, #prev{
            background-color: #fff;
            padding: 0.2em;
            font-size: 2.6em;
            border-radius: 50%;
            cursor: pointer;
            transition:0.4s;
            &:hover{
                opacity: 0.8;
            }
        }
        
    };
    .actual{
        display: flex;
        gap: 1em;
        margin-top: 2em;
       
        span{
            background-color: #fff;
            width: 0.7em;
            height: 0.7em;
            border-radius: 50%;
            transition: 0.2s;
            cursor: pointer;
        }
    }
    #ac{
        background-color: red;
        width: 2em;
        border-radius: 10px;
    }

    .infos{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        h4{
            font-size:2em;
        }
        span{
            margin-top: 2em;
            font-size: 1.4em;
        }

        @media (max-width: 1000px){
            width: 70%;
        }

        @media (max-width: 700px){
            width: 90%;
        }
        @media (max-width: 520px){
            align-items: center;
            justify-content: center;
        }
    }

    .icons{
        display: flex;
        gap: 0.9em;
        svg{
            padding: 0.2em;
            font-size: 2.3em;
            background-color: #0f0f0f;
            border-radius: 3px;
        }
    }
    #repo, #see{
        border: 1em;
        text-align:center;
        width: 10em;
        padding: 0.6em;
        border-radius: 5px;
        transition: 0.4s;
        &:hover{
            opacity: 0.6;
        }
    }
    #repo{
        border: 1px solid #FF5C00;;
        color: #FF5C00;
    }
    #see{
        border: 1px solid blue;
        color: blue;
    }

    .links{
        margin-top: 1em;
        display: flex;
        gap: 1em;
    }
    @keyframes animate {
            from{
                opacity: 0;
                transform: translate3d(0px, 80px,0)
            }
            to{
                opacity: 1;
                transform: translate3d(0, 0px,0)
            }
       }

      
    
`