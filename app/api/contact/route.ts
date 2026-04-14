import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "Voxtent <hello@voxtent.in>",
      to: [
  "lovely.anand125@gmail.com",
  "thekanishk.indrarun@gmail.com"
],
      replyTo: email,
      subject: `New lead from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("EMAIL SENT:", data);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}