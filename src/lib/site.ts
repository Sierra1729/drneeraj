// ── Edit these four values with the clinic's real details ──────────────
// WHATSAPP_NUMBER / PHONE_NUMBER: full international format, e.g. "919876543210"
export const PHONE_NUMBER = "+91 96229 50796";
export const WHATSAPP_NUMBER = "+91 96229 50796";
export const EMAIL_ADDRESS = "alpha.bravo0796@gmail.com";
export const CLINIC_ADDRESS = "IT Centre, University of Jammu, Jammu, J&K";
// ───────────────────────────────────────────────────────────────────────

export const WHATSAPP_MESSAGE =
  "Hello Dr. Neeraj K Gupta, I would like to book an appointment";

/** Keeps digits only, so placeholders never produce a broken wa.me / tel: URL. */
const digits = (value: string) => value.replace(/\D/g, "");

const waDigits = digits(WHATSAPP_NUMBER);
const phoneDigits = digits(PHONE_NUMBER);

// With no number configured yet, wa.me still opens WhatsApp with the message
// pre-filled and lets the visitor pick the contact, instead of erroring.
export const WHATSAPP_LINK = `https://wa.me/${waDigits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const PHONE_LINK = phoneDigits ? `tel:+${phoneDigits}` : WHATSAPP_LINK;
export const EMAIL_LINK = EMAIL_ADDRESS.includes("@")
  ? `mailto:${EMAIL_ADDRESS}`
  : "#contact";
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}&output=embed`;


export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
