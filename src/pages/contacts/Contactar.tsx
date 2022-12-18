import React, { useRef } from 'react'
import { SecondaryTitle } from '../../styles/Global'
import { Container, Form } from './contactar.style'
import { FiSend } from 'react-icons/fi'
import { BsFilePerson, BsVoicemail } from 'react-icons/bs'
import { MdSubject } from 'react-icons/md'
import { BiMessageSquare } from 'react-icons/bi'
import { sender } from '../../services/sendMailer'
import Lottie from 'lottie-react'
import robo from '../../assets/lottie/124587-butterfly-on-mechanical-robot-finger-hand.json'

const Contactar = () => {

    const defaultConfig = {
        loop: true,
        autoplay: true,
        animationData: robo
    }

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
                message: messageRef.current.value,
                from_name: messageRef.current.value
            }
            await sender(data)
        }
    }

    return (
        <Container id="contact">
            <SecondaryTitle>Contatar</SecondaryTitle>
            <div className='content'>
                <Lottie  {...defaultConfig} style={{ width: '35em', height: '35em' }} />
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
                        <label><BiMessageSquare /> Mensagem</label>
                        <textarea placeholder='oferta' ref={messageRef} />
                    </div>
                    <button onClick={handleSenderMailer}>Enviar mensagem <FiSend /></button>
                </Form>
            </div>
        </Container>
    )
}

export default Contactar