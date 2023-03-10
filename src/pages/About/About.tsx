import React, { useEffect, useRef, useState } from 'react'
import { SecondaryTitle, SubTitle } from '../../styles/Global'
import { Container } from './about.styles'
import eu from '../../assets/IMG_20221201_103826_240-PhotoRoom.png-PhotoRoom.png'
import { useAnimate } from '../../hooks/useAnimate'

const About = () => {
    const myRef = useRef<HTMLSpanElement | null>(null)
    const { show } = useAnimate(myRef)

    return (
        <Container className={show ? "about" : ''} id="about">
            <div id="principal" >
                <span ref={myRef} id="ref" />
                <SecondaryTitle>Sobre mim</SecondaryTitle>
                <div className="summary">
                    <SubTitle>Resumo</SubTitle>
                    <p>Sou um desenvolvedor web, tenho um perfil mais generalista, gosto de estudar sobre diversas
                        frentes na area de desenvolvimento, porem tenho um foco maior no backend, afinal sempre
                        gostei de logica.</p>
                </div>

                <div className='infos'>
                    <SubTitle>Informações pessoais</SubTitle>
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