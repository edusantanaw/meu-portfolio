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
    const messageRef = useRef<HTMLTextAreaElement | null>(null)
    const spanRef = useRef<HTMLSpanElement>(null)
    const { show } = useAnimate(spanRef)
    const [error, setError] = useState<string | null>(null)
    const [sended, setSended] = useState<boolean>(false)

    async function handleSenderMailer(data: data) {
        await sender(data)
    }

    async function validate() {
        if (emailRef.current && nameRef.current && messageRef.current) {
            if (!nameRef.current.value) {
                setError('O nome está invalido!')
                return
            }
            if (!emailRef.current.value || !emailRef.current.value.includes('@')) {
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
            await handleSenderMailer(data)
            setSended(true)
            return
        }
        setError('Formulario invalido!')
    }

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
                <Lottie id="robot"  {...defaultConfig} style={{ width: '35em', height: '35em' }} />
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
                    {error && <span id="error">{error}</span>}
                    {sended && <span id="success" >Email enviado com sucesso!</span>}
                    {!sended && <button onClick={async () => await validate()}>Enviar mensagem <FiSend /></button>}
                </Form>
            </div>
        </Container>
    )
}

export default Contactar