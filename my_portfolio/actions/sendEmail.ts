"use server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  try {
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    console.log("Sending email from:", senderEmail);
    console.log("Message:", message);

    const response = await resend.emails.send({
      from: "Portfolio form <onboarding@resend.dev>",
      to: "karthikkrishna3.25.2004@gmail.com",
      reply_to: senderEmail,
      subject: "Message from contact form.",
      react: React.createElement(ContactFormEmail, {
        message: message, 
        senderEmail: senderEmail
      }),
    //   react: <ContactFormEmail message={message} senderEmail={senderEmail}/>
    });

    console.log("Email response:", response);
    return { success: true };
  } catch (error:any) {
    console.error("Failed to send email:", error);
    return { error: `Failed to send email: ${error.message}`, success: false };
  }
};

export default sendEmail;
