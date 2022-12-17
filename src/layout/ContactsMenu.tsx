import React from 'react'
import { Container } from './contacts-menu.styles'
import { BsInstagram, BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'

const ContactsMenu = () => {
    return (
        <Container>
            <hr />
            <ul>
                <li><BsInstagram /></li>
                <li><BsLinkedin /></li>
                <li><BsWhatsapp /></li>
                <li><BsGithub /></li>
            </ul>
        </Container>
    )
}

export default ContactsMenu