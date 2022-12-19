import React, { useRef, useState } from 'react'
import { SecondaryTitle } from '../../styles/Global'
import { Container, Form } from './contactar.style'
import { FiSend } from 'react-icons/fi'
import { BsFilePerson, BsVoicemail } from 'react-icons/bs'
import { BiMessageSquare } from 'react-icons/bi'
import { sender } from '../../services/sendMailer'
import Lottie from 'lottie-react'
import robo from '../../assets/lottie/124587-butterfly-on-mechanical-robot-finger-hand.json'
import { useAnimate } from '../../hooks/useAnimate'

type data = { email: string, from_name: string, message: string }

const Contactar = () => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const nameRef = useRef<HTMLInputElement | null>(null)
    const subjectRef = useRef<HTMLInputElement | null>(null)
    const messageRef = useRef<HTMLTextAreaElement | null>(null)
    const spanRef = useRef<HTMLSpanElement>(null)
    const { show } = useAnimate(spanRef)
    const [error, setError] = useState<string | null>(null)

    async function handleSenderMailer(data: data) {
        await sender(data)
    }

    function validate() {
        if (emailRef.current && nameRef.current && subjectRef.current && messageRef.current) {
            if (!nameRef.current.value) {
                setError('O nome está invalido!')
                return
            }
            if (!emailRef.current.value) {
                setError('Email é invalido!')
                return
            }

            if (!messageRef.current.value) {
                setError('A mensagem é invalido!')
                return
            }
            if (error) setError(null)
            const data = {
                email: emailRef.current.value,
                from_name: nameRef.current.value,
                message: messageRef.current.value
            }
            handleSenderMailer(data)
            return
        }
        setError('Formulario invalido!')
    }

    console.log(error)
    const defaultConfig = {
        loop: true,
        autoplay: true,
        animationData: robo
    }

    return (
        <Container id="contact" className={show ? 'contact' : ''}>
            <SecondaryTitle>Contatar</SecondaryTitle>
            <span ref={spanRef} />
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
                    <span id="error">{error && error}</span>
                    <button onClick={validate}>Enviar mensagem <FiSend /></button>
                </Form>
            </div>
        </Container>
    )
}

export default Contactar