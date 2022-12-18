import React from 'react'
import { SecondaryTitle } from '../../styles/Global'
import { Container } from './about.styles'
import eu from '../../assets/IMG_20221201_103826_240-PhotoRoom.png-PhotoRoom.png'

const About = () => {
    return (
        <Container>
            <div>
                <SecondaryTitle>Sobre mim</SecondaryTitle>
                <div className="summary">
                    <h3>Resumo</h3>
                    <p>Sou um desenvolvedor web, tenho um perfil mais generalista, gosto de estudar diversas
                        frentes na area de desenvolvimento, porem tenho um foco maior no backend, afinal sempre
                        gostei de logica.</p>
                </div>
                <div className='infos'>
                    <h3>Informações pessoais</h3>
                    <ul>
                        <li><span>Nome:</span> Eduardo Santana Vidal</li>
                        <li><span>Cidade:</span> Sorocaba-SP</li>
                        <li><span>idade:</span> 20 Anos</li>
                        <li><span>Status profissional:</span> Disponivel</li>
                        <li><span>Telefone:</span> 15981026465</li>
                    </ul>
                </div>
            </div>
            <div className='me'>
                <img src={eu} alt="minha foto" />
            </div>
        </Container>
    )
}

export default About