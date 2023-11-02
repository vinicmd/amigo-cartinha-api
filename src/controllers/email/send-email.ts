import { Resend } from 'resend'
import { envConfig } from '../../utils/env'

interface SendEmailType {
  toEmail: string
  htmlContent: string
}

const resend = new Resend(envConfig.resendKey)

export async function sendEmail({
  toEmail,
  htmlContent
}: SendEmailType): Promise<void> {
  try {
    const data = await resend.emails.send({
      from: 'Amigo Cartinha INT <vinicius@amigocartinha.online>',
      to: [toEmail],
      subject: 'Você saiu com...',
      html: htmlContent
    })

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
