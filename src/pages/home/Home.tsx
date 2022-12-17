import React from 'react'
import { Button, Container, Span, SubTitle, Title } from './styles.home'
import { IoLocationOutline } from 'react-icons/io5'
const Home = () => {
    return (
        <Container>
            <div className='top'>
                <hr />
                <Span>Seja bem vindo ao meu portfolio!</Span>
            </div>
            <div className='teste'>
                <Title>Sou o Eduardo Santana</Title>
                <SubTitle>Desenvolvedor Full-Stack</SubTitle>
                <div>
                    <IoLocationOutline />
                    <span>Sorocaba-SP, Brasil.</span>
                </div>
                <Button>Curricúlo</Button>
            </div>
        </Container>
    )
}

export default Home