import React from 'react'
import { Container } from './contacts-menu.styles'
import { BsInstagram, BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'

const ContactsMenu = () => {
    return (
        <Container>
            <ul>
                <li><a href='https://www.instagram.com/edusantanaw/'><BsInstagram color="#a90abb" /></a></li>
                <li><a href="https://www.linkedin.com/in/eduardo-santana-7a4926245/"><BsLinkedin color="#0a29c4" /></a></li>
                <li><a href="https://wa.me/15981026465"><BsWhatsapp color="#0d861b" /></a></li>
                <li><a href="https://github.com/edusantanaw"><BsGithub color="#61105d" /></a></li>
            </ul>
        </Container>
    )
}

export default ContactsMenu