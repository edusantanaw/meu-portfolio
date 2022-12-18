import emailjs from "@emailjs/browser";

interface data {
    from_name: string
    message: string
    email: string
}

export async function sender(data: data) {

    const { email, from_name, message } = data
    const templete = {
        from_name,
        email,
        message
    }
    const response = await emailjs.send("service_0swg3dr", "template_ai8mvf5", templete, "StUPjn71W8s6ljHzF")
    console.log(response)
}