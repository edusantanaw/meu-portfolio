import React from 'react'
import { SecondaryTitle } from '../../styles/Global'
import { Container, Form } from './contactar.style'
import { FiSend } from 'react-icons/fi'
import { BsFilePerson, BsVoicemail } from 'react-icons/bs'
import { MdSubject } from 'react-icons/md'
import { BiMessageSquare } from 'react-icons/bi'

const Contactar = () => {
    return (
        <Container>
            <SecondaryTitle>Contatar</SecondaryTitle>
            <Form>
                <div>
                    <label><BsFilePerson /> Nome</label>
                    <input type="text" placeholder='Example' />
                </div>
                <div>
                    <label><BsVoicemail /> Seu email</label>
                    <input type="text" placeholder='exampe@email.com' />
                </div>
                <div>
                    <label><MdSubject /> Assunto</label>
                    <input type="text" placeholder='emprego' />
                </div>
                <div>
                    <label><BiMessageSquare /> Mensagem</label>
                    <textarea placeholder='oferta' />
                </div>
                <button>Enviar mensagem <FiSend /></button>
            </Form>
        </Container>
    )
}

export default Contactar