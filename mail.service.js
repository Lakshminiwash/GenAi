import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER?.trim(),
        pass: process.env.EMAIL_PASS?.trim()
    }
})

transporter.verify()
    .then(() => { console.log("email transporter is ready to send email") })
    .catch((err) => { console.error("email transporter verification failed", err) })

export async function sendEmail({ to, subject, html, text = "" }) {
    const mailOption = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html,
        text
    };
    const detail = await transporter.sendMail(mailOption)
    console.log("Email sent:", details);
    return "email sent successfully, to " + to;
}

