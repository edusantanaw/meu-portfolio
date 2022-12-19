import React, { useState } from 'react'
import { Navegation } from './nav,style'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaAngleRight } from 'react-icons/fa'
import logo from '../assets/logo.png'

export const Nav = () => {

    const [show, setShow] = useState<boolean>(false)

    function handleMenu() {
        show ? setShow(false) : setShow(true)
    }

    return (
        <Navegation>
            <a href="#home"><img id="logo" src={logo} alt="logo" /></a>
            <ul className={show ? 'menu' : ''}>
                {show && <FaAngleRight id="close" onClick={handleMenu} />}
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#project">Projetos</a></li>
                <li><a href="#contact">Contatar</a></li>
            </ul>
            {!show && <GiHamburgerMenu id="hamb" onClick={handleMenu} />}
        </Navegation>
    )
}
