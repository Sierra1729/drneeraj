// ── Edit these four values with the clinic's real details ──────────────
// WHATSAPP_NUMBER / PHONE_NUMBER: full international format, e.g. "919876543210"
export const PHONE_NUMBER = "+91 96229 50796";
export const WHATSAPP_NUMBER = "+91 96229 50796";
export const EMAIL_ADDRESS = "alpha.bravo0796@gmail.com";
export const CLINIC_ADDRESS = "200 A/D, 1st Floor, Left Lane of Panch Mandir, Gandhi Nagar, Jammu, J&K 180004";
export const LOGO_IMG = "https://i.ibb.co/ZR67RKn8/IMG-20241223-203952-171.webp";
// ───────────────────────────────────────────────────────────────────────

export const WHATSAPP_MESSAGE =
  "Hello Dr. Neeraj K Gupta, I am interested in one-on-one counselling.";

/** Keeps digits only, so placeholders never produce a broken wa.me / tel: URL. */
const digits = (value: string) => value.replace(/\D/g, "");

const waDigits = digits(WHATSAPP_NUMBER);
const phoneDigits = digits(PHONE_NUMBER);

export const WHATSAPP_LINK = waDigits
  ? `https://wa.me/${waDigits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : `https://wa.me/?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const PHONE_LINK = phoneDigits ? `tel:+${phoneDigits}` : WHATSAPP_LINK;
export const EMAIL_LINK = EMAIL_ADDRESS.includes("@")
  ? `mailto:${EMAIL_ADDRESS}`
  : "#contact";
export const MAP_LINK = "https://maps.app.goo.gl/FhgYypovAbRj6Dak6";
export const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.849085215552!2d74.85796477560295!3d32.71052367366865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eeca674acd635%3A0xacd2f5c763a733db!2s200%20A%2FD%2C%201st%20Floor%20Left%20Lane%20of%20Panch%20Mandir%2C%20Gandhi%20Nagar%2C%20Jammu%2C%20Jammu%20and%20Kashmir%20180004!5e0!3m2!1sen!2sin!4v1742489130000!5m2!1sen!2sin";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Counselling", href: "#counselling" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
