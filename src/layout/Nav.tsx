import React from 'react'
import { Navegation } from './nav,style'

export const Nav = () => {
    return (
        <Navegation>
            <h2>Logo</h2>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#project">Projetos</a></li>
                <li><a href="#contact">Contatar</a></li>
            </ul>
        </Navegation>
    )
}
