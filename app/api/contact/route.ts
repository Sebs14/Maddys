import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Verificar que las variables de entorno existan
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("Faltan variables de entorno SMTP_USER o SMTP_PASSWORD");
      return NextResponse.json(
        { error: "Configuración de email incompleta" },
        { status: 500 }
      );
    }

    console.log("Intentando enviar email con configuración:");
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("A:", process.env.CONTACT_EMAIL || process.env.SMTP_USER);

    // Configurar el transportador de nodemailer usando createTransport (sin "er")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verificar la conexión
    await transporter.verify();
    console.log("Conexión SMTP verificada correctamente");

    // Configurar el email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #022733; border-bottom: 3px solid #EF7B32; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Asunto:</strong> ${subject}</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #022733; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
          </div>
        </div>
      `,
      text: `
Nuevo mensaje de contacto

Nombre: ${name}
Email: ${email}
Asunto: ${subject}

Mensaje:
${message}
      `,
    };

    // Enviar el email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado correctamente:", info.messageId);

    return NextResponse.json(
      { message: "Email enviado correctamente" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error detallado al enviar email:");
    console.error("Nombre:", error.name);
    console.error("Mensaje:", error.message);
    console.error("Stack:", error.stack);

    return NextResponse.json(
      {
        error: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
