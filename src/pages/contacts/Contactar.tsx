import React, { useRef } from 'react'
import { SecondaryTitle } from '../../styles/Global'
import { Container, Form } from './contactar.style'
import { FiSend } from 'react-icons/fi'
import { BsFilePerson, BsVoicemail } from 'react-icons/bs'
import { MdSubject } from 'react-icons/md'
import { BiMessageSquare } from 'react-icons/bi'
import sender from '../../services/sendMailer'



const Contactar = () => {

    const emailRef = useRef<HTMLInputElement | null>(null)
    const nameRef = useRef<HTMLInputElement | null>(null)
    const subjectRef = useRef<HTMLInputElement | null>(null)
    const messageRef = useRef<HTMLTextAreaElement | null>(null)

    async function handleSenderMailer() {
        if (
            emailRef.current
            && nameRef.current &&
            subjectRef.current &&
            messageRef.current) {
            const data = {
                email: emailRef.current.value,
                subject: subjectRef.current.value,
                message: messageRef.current.value,
                name: messageRef.current.value
            }
            // sender(data)
        }
    }

    return (
        <Container>
            <SecondaryTitle>Contatar</SecondaryTitle>
            <Form>
                <div>
                    <label><BsFilePerson /> Nome</label>
                    <input type="text" ref={nameRef} placeholder='Example' />
                </div>
                <div>
                    <label><BsVoicemail /> Seu email</label>
                    <input type="text" ref={emailRef} placeholder='exampe@email.com' />
                </div>
                <div>
                    <label><MdSubject /> Assunto</label>
                    <input type="text" ref={subjectRef} placeholder='emprego' />
                </div>
                <div>
                    <label><BiMessageSquare /> Mensagem</label>
                    <textarea placeholder='oferta' ref={messageRef} />
                </div>
                <button onClick={handleSenderMailer}>Enviar mensagem <FiSend /></button>
            </Form>
        </Container>
    )
}

export default Contactar