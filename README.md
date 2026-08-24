# Dr. Nikhil's Practice

Design a premium, modern, trustworthy personal-brand website for a doctor named Dr. Nikhil. It should feel calm, premium, and human — like a boutique private practice, not a hospital template or a generic SaaS landing page. The main goal is to get visitors to click "Book Appointment" or "Chat on WhatsApp".

Design system: Deep navy (#0F2A47) as primary color, muted teal (#2E7D6B) as accent, warm off-white (#FAF9F6) background. Rounded corners, soft subtle shadows, generous whitespace. Font pairing: Plus Jakarta Sans or Manrope for headings, Inter for body text. Avoid blue gradients, stock-photo clutter, heavy shadows, and cluttered layouts.

Build a single page with these sections, in this order, with a sticky nav linking to each:

Navbar — logo/wordmark, links (Home, About, Services, Testimonials, FAQ, Contact), a "Book Appointment" button, and a WhatsApp icon button. Collapses to a hamburger menu on mobile.

Hero — small badge "Trusted Medical Care", heading "Personalized Care. Better Health. A Doctor You Can Trust.", subheading about compassionate, evidence-based, personalized care, two buttons ("Book an Appointment" and "Chat on WhatsApp"), and a professional doctor portrait placeholder with a soft shadow.

About — doctor photo on one side, bio on the other, with placeholders for specialization, qualifications, years of experience, areas of expertise, and professional memberships.

Services — 6 cards (icon, title, one-line description) for placeholder medical services, with a subtle hover lift.

Why Choose Dr. Nikhil — 4 short reasons with icons (e.g. Personalized Attention, Evidence-Based Care, Clear Communication, Patient-Centered Approach).

Testimonials — 3 placeholder quotes, first name only, optional star rating. No fabricated medical outcomes.

FAQ accordion — 6 questions covering: how to book, online consultations, consultation length, what to bring, how to contact, clinic location.

Contact + Footer — phone, WhatsApp, email, and clinic address each with a working action button, an embedded Google Map, footer nav links, social icons, copyright line, and a small medical disclaimer: "The information on this website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment."

WhatsApp: Every WhatsApp button (navbar, hero, contact, and a floating bottom-right button on every page) should link to https://wa.me/[WHATSAPP_NUMBER]?text=Hello%20Dr.%20Nikhil%2C%20I%20would%20like%20to%20book%20an%20appointment. On mobile, add a persistent sticky bottom bar with large Call and WhatsApp buttons.

Content rule: Don't invent real facts about Dr. Nikhil — no made-up experience numbers, awards, or patient counts. Use clear placeholders: [SPECIALIZATION], [QUALIFICATIONS], [YEARS_OF_EXPERIENCE], [CLINIC_ADDRESS], [PHONE_NUMBER], [WHATSAPP_NUMBER], [EMAIL_ADDRESS].

Tech: Fully responsive and mobile-first, no horizontal scroll, smooth anchor scrolling, subtle fade/slide-in animations on scroll only (nothing flashy), fast-loading.

Build this as one complete, working site in this response. Don't ask clarifying questions — use sensible defaults for anything unclear, and make sure every nav link, WhatsApp button, the FAQ accordion, and the mobile menu all actually work.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/29c73828-8912-4f72-a96b-cda6ddd6aade).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
