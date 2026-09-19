// ===== Configuración =====
// Reemplazá este número por el de la barbería, en formato internacional
// sin "+", espacios ni guiones. Ej.: 5491122334455
const WHATSAPP_NUMBER = "000000000000";

// ===== Año dinámico en el footer =====
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Fecha mínima: hoy =====
const fechaInput = document.getElementById("fecha");
if (fechaInput) {
  fechaInput.min = new Date().toISOString().split("T")[0];
}

// ===== Envío del formulario por WhatsApp =====
const form = document.getElementById("booking-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const notas = document.getElementById("notas").value.trim();

    // Fecha en formato legible (dd/mm/aaaa)
    let fechaLegible = fecha;
    if (fecha) {
      const [y, m, d] = fecha.split("-");
      fechaLegible = `${d}/${m}/${y}`;
    }

    const lineas = [
      "Hola! Quiero agendar una cita en Deambrosi Bárber.",
      "",
      `• Nombre: ${nombre}`,
      `• Servicio: ${servicio}`,
      `• Día: ${fechaLegible}`,
      `• Hora: ${hora}`,
    ];

    if (notas) {
      lineas.push(`• Notas: ${notas}`);
    }

    const mensaje = encodeURIComponent(lineas.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;

    window.open(url, "_blank");
  });
}
