import React from 'react'
import { Button, Container, Span, SubTitle, Title } from './styles.home'
import { IoLocationOutline } from 'react-icons/io5'
const Home = () => {
    return (
        <Container id="home">
            <Span>Seja bem vindo ao meu portfolio!</Span>
            <div className='who'>
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