// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import nodemailer from 'nodemailer';

export async function sendEmail(prevState: any, formData: FormData) {
  try {
    const nom = formData.get('nom') as string;
    const prenom = formData.get('prenom') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Vérifications basiques
    if (!nom || !prenom || !email || !message) {
      return { message: 'Tous les champs sont obligatoires.', success: false };
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configuration de l'e-mail
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Nouveau message de ${nom} ${prenom}`,
      text: message,
      html: `<p>Nom: ${nom}</p><p>Prénom: ${prenom}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    revalidatePath('/contact'); // Optionnel: Revalider la page après l'envoi

    return { message: 'E-mail envoyé avec succès!', success: true };

  } catch (error) {
    console.error(error);
    return { message: "Erreur lors de l'envoi de l'e-mail.", success: false };
  }
}