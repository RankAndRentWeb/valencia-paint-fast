import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { nombre, telefono, email, mensaje } = await request.json();

    await resend.emails.send({
      from: "Pintores Valencia <no-reply@pintores-valencia.com>",
      to: "info@pintores-valencia.com",
      subject: `Nuevo lead web: ${nombre} (${telefono})`,
      reply_to: email || "info@pintores-valencia.com",
      text: `
Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email || "no indicado"}

Mensaje:
${mensaje}
      `.trim(),
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
