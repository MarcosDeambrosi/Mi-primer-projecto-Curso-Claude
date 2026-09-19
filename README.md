# Deambrosi Bárber — Landing Page

Landing page minimalista y profesional para la barbería **Deambrosi Bárber**.
Su objetivo principal es **agendar clientes**: el formulario arma un mensaje
listo para enviar por WhatsApp con los datos de la cita.

## Estructura

- `index.html` — estructura y contenido de la página.
- `styles.css` — estilos (tema oscuro, acento dorado, responsive).
- `script.js` — lógica del formulario de reservas y utilidades.

## Cómo verla

Abrí `index.html` en el navegador. No requiere servidor ni instalación.

## Personalización rápida

1. **Número de WhatsApp**: en `script.js` cambiá `WHATSAPP_NUMBER` por el
   número de la barbería en formato internacional, sin `+`, espacios ni guiones
   (ej.: `5491122334455`). Actualizá también los enlaces `https://wa.me/...`
   en `index.html` (botón flotante y sección de contacto).
2. **Servicios y precios**: editá las tarjetas de la sección *Servicios* en
   `index.html` y reemplazá "$ desde" por los precios reales.
3. **Horarios y dirección**: actualizá la sección *Horarios / Dónde estamos*.
4. **Textos**: ajustá títulos y descripciones a gusto.

## Secciones

- **Hero** con llamada a la acción para agendar.
- **Servicios** ofrecidos.
- **Nosotros** con la propuesta de valor.
- **Agendar** — formulario que envía la solicitud por WhatsApp.
- **Horarios y contacto**.
