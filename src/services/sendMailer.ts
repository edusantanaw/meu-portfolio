import nodemailer from 'nodemailer'
import { config } from '../config/sender'

interface data {
    email: string;
    name: string;
    subject: string;
    message: string;
}


function create() {
    const transport = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: false,
        auth: {
            user: config.user,
            pass: config.pass,
        },
        tls: {
            rejectUnauthorized: false,
        }
    })
    return transport
}

async function sender(data: data) {
    const mailSend = create()
    await mailSend.sendMail({
        subject: data.subject,
        text: data.message,
        from: 'Eduardo Santana',
        to: data.email
    })
}

export default sender

