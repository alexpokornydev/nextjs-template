import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { name, mail, request } = req.body

  if (!name || !mail || !request) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp host',
      port: 587,
      secure: false,
      auth: {
        user: 'your@email.cz',
        pass: 'your email password', 
      },
    })

    const mailOptions = {
      from: 'your@email.cz', 
      to: 'info@javaoff.com',
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nE-mail: ${mail}\n\nMessage:\n${request}`,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong', error })
  }
}
