import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const { nombre, telefono, email, mensaje } = await request.json();

  await resend.emails.send({
    from: "Pintores Valencia <no-reply@pintores-valencia.com>",
    to: "info@pintores-valencia.com",
    subject: `Nuevo lead web · ${nombre} (${telefono})`,
    text: `
Nuevo lead desde la web:

Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email || "No indicado"}

Mensaje:
${mensaje}
    `.trim(),
    html: `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size:14px; line-height:1.5; color:#111827;">
        <h2 style="margin:0 0 12px 0;">Nuevo lead desde la web</h2>
        <p style="margin:0 0 4px 0;"><strong>Nombre:</strong> ${nombre}</p>
        <p style="margin:0 0 4px 0;"><strong>Teléfono:</strong> ${telefono}</p>
        <p style="margin:0 0 12px 0;"><strong>Email:</strong> ${email || "No indicado"}</p>
        <p style="margin:0 0 4px 0;"><strong>Mensaje:</strong></p>
        <p style="white-space:pre-line; margin:0 0 12px 0;">${mensaje}</p>
        <hr style="border:none; border-top:1px solid #e5e7eb; margin:16px 0;" />
        <p style="font-size:12px; color:#6b7280; margin:0;">Lead generado automáticamente desde pintores-valencia.com</p>
      </div>
    `,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
