import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  HeartPulse,
  Baby,
  Activity,
  Syringe,
  ClipboardList,
  Video,
  UserRound,
  ShieldCheck,
  MessagesSquare,
  HandHeart,
  GraduationCap,
  BriefcaseMedical,
  Users,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/Reveal";
import {
  CLINIC_ADDRESS,
  EMAIL_ADDRESS,
  EMAIL_LINK,
  MAP_EMBED,
  MAP_LINK,
  NAV_LINKS,
  PHONE_LINK,
  PHONE_NUMBER,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "@/lib/site";
import heroPortrait from "@/assets/doctor-hero.jpg";
import aboutPhoto from "@/assets/doctor-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Neeraj K Gupta — Personalized Care You Can Trust" },
      {
        name: "description",
        content:
          "Boutique private practice offering compassionate, evidence-based and personalized medical care. Book an appointment or chat on WhatsApp with Dr. Neeraj K Gupta.",
      },
      { property: "og:title", content: "Dr. Neeraj K Gupta — Personalized Care You Can Trust" },
      {
        property: "og:description",
        content:
          "Compassionate, evidence-based, personalized medical care. Book an appointment or chat on WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: ClipboardList, title: "[SERVICE_1] Consultation", desc: "Unhurried first visits with a clear, written care plan." },
  { icon: HeartPulse, title: "Preventive Health Checks", desc: "Structured screening and long-term risk review." },
  { icon: Activity, title: "Chronic Condition Care", desc: "Ongoing management with regular follow-up reviews." },
  { icon: Video, title: "Online Consultations", desc: "Secure video visits for follow-ups and second opinions." },
  { icon: Syringe, title: "Vaccination & Travel Advice", desc: "Schedules and guidance tailored to your plans." },
  { icon: Baby, title: "Family & Wellness Care", desc: "Care for the whole household, in one place." },
];

const reasons = [
  { icon: UserRound, title: "Personalized Attention", desc: "Longer appointments, so nothing feels rushed." },
  { icon: ShieldCheck, title: "Evidence-Based Care", desc: "Guideline-led decisions, explained in plain language." },
  { icon: MessagesSquare, title: "Clear Communication", desc: "You leave knowing the what, why and next step." },
  { icon: HandHeart, title: "Patient-Centered Approach", desc: "Plans shaped around your goals and daily life." },
];

const testimonials = [
  { name: "Priya", quote: "The consultation never felt rushed. Every question I had was answered patiently and clearly." },
  { name: "Rahul", quote: "Booking was simple and the clinic is calm and welcoming. Communication has been excellent throughout." },
  { name: "Ananya", quote: "I appreciated how carefully everything was explained before any decision was made." },
];

const faqs = [
  { q: "How do I book an appointment?", a: "Use the “Book Appointment” button on this page, message us on WhatsApp, or call the clinic during working hours. You'll receive a confirmation with your date, time and location." },
  { q: "Do you offer online consultations?", a: "Yes. Secure video consultations are available for follow-ups, report reviews and second opinions. Share the WhatsApp message request and we'll send a link and time slot." },
  { q: "How long is a typical consultation?", a: "First consultations are scheduled to allow an unhurried discussion of your history and concerns. Follow-up visits are usually shorter and focused on progress." },
  { q: "What should I bring to my visit?", a: "Please bring a photo ID, previous prescriptions, a list of medicines you take, and any recent test reports or scans, digital or printed." },
  { q: "How can I contact the clinic?", a: `You can call ${PHONE_NUMBER}, message ${WHATSAPP_NUMBER} on WhatsApp, or email ${EMAIL_ADDRESS}. WhatsApp is usually the fastest way to reach us.` },
  { q: "Where is the clinic located?", a: `The clinic is at ${CLINIC_ADDRESS}. Use the map below for directions and parking guidance.` },
];

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBar />
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-accent/8 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Trusted Medical Care
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-primary sm:text-5xl lg:text-[3.4rem]">
            Personalized Care. Better Health. A Doctor You Can Trust.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Compassionate, evidence-based medicine delivered at a human pace. Dr. Neeraj K Gupta offers
            unhurried consultations and care plans built around you — not a template.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-7 shadow-soft">
              <a href="#contact">
                <CalendarDays className="size-4.5" /> Book an Appointment
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-whatsapp px-7 text-whatsapp-foreground shadow-soft hover:bg-whatsapp/90"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4.5" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["Specialization", "[SPECIALIZATION]"],
              ["Qualifications", "[QUALIFICATIONS]"],
              ["Experience", "[YEARS_OF_EXPERIENCE]"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {k}
                </dt>
                <dd className="mt-1 font-display text-sm font-semibold text-primary">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2.2rem] bg-accent/10"
            style={{ transform: "rotate(-3deg)" }}
          />
          <img
            src={heroPortrait}
            alt="Portrait of Dr. Neeraj K Gupta in a white coat"
            width={1024}
            height={1280}
            className="relative w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="relative -mt-8 ml-4 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
            <ShieldCheck className="size-4.5 text-accent" />
            <span className="text-sm font-medium text-primary">
              Evidence-based, patient-first care
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section heading ---------------- */

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
      {sub ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p> : null}
    </Reveal>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <img
            src={aboutPhoto}
            alt="Dr. Nikhil consulting with a patient in the clinic"
            width={1200}
            height={1008}
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            About the doctor
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Medicine practiced with patience and precision
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Dr. Neeraj K Gupta is a [SPECIALIZATION] practising at a boutique clinic where every visit is
            given the time it deserves. The approach is simple: listen carefully, investigate
            thoughtfully, and explain every option clearly so you can decide with confidence.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Care plans are built around your history, your goals and your day-to-day life, with
            follow-up that keeps you supported long after the consultation ends.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: BriefcaseMedical, k: "Specialization", v: "[SPECIALIZATION]" },
              { icon: GraduationCap, k: "Qualifications", v: "[QUALIFICATIONS]" },
              { icon: Activity, k: "Years of Experience", v: "[YEARS_OF_EXPERIENCE]" },
              { icon: Users, k: "Professional Memberships", v: "[PROFESSIONAL_MEMBERSHIPS]" },
            ].map(({ icon: Icon, k, v }) => (
              <div
                key={k}
                className="rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <dt className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  <Icon className="size-4 text-accent" /> {k}
                </dt>
                <dd className="mt-2 font-display font-semibold text-primary">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Areas of expertise
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["[AREA_OF_EXPERTISE_1]", "[AREA_OF_EXPERTISE_2]", "[AREA_OF_EXPERTISE_3]", "[AREA_OF_EXPERTISE_4]"].map(
                (a) => (
                  <li
                    key={a}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-primary"
                  >
                    {a}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Services"
          title="Care for every stage of your health"
          sub="A focused set of services, each delivered with the same unhurried attention."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal as="li" key={title} delay={i * 70}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Why choose ---------------- */

function WhyChoose() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead eyebrow="Why patients stay" title="Why choose Dr. Neeraj K Gupta" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <Reveal as="li" key={title} delay={i * 70} className="text-center sm:text-left">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Testimonials"
          title="In our patients' words"
          sub="Placeholder quotes about the experience of care — replace with your own reviews."
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex size-9 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-sm font-medium text-primary">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <Reveal className="mt-10">
          <Accordion
            type="single"
            collapsible
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border px-5 last:border-b-0">
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

const contactItems = [
  { icon: Phone, label: "Phone", value: PHONE_NUMBER, cta: "Call now", href: PHONE_LINK, external: false },
  { icon: WhatsAppIcon, label: "WhatsApp", value: WHATSAPP_NUMBER, cta: "Chat now", href: WHATSAPP_LINK, external: true },
  { icon: Mail, label: "Email", value: EMAIL_ADDRESS, cta: "Send email", href: EMAIL_LINK, external: false },
  { icon: MapPin, label: "Clinic address", value: CLINIC_ADDRESS, cta: "Get directions", href: MAP_LINK, external: true },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Contact"
          title="Book your appointment"
          sub="Call, message or email the clinic — we'll confirm a time that works for you."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {contactItems.map(({ icon: Icon, label, value, cta, href, external }) => (
              <div
                key={label}
                className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="flex size-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="size-4.5" />
                </span>
                <p className="mt-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="mt-1 flex-1 font-display font-semibold break-words text-primary">
                  {value}
                </p>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {cta} <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-soft">
              <iframe
                title="Clinic location map"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full rounded-[1.4rem] border-0 lg:h-full lg:min-h-[26rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-28 text-primary-foreground sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">Dr. Neeraj K Gupta</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A boutique private practice offering calm, personalized and evidence-based medical
              care.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: WHATSAPP_LINK, label: "WhatsApp", Icon: WhatsAppIcon },
                { href: PHONE_LINK, label: "Call", Icon: Phone },
                { href: EMAIL_LINK, label: "Email", Icon: Mail },
                { href: MAP_LINK, label: "Directions", Icon: MapPin },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary-foreground/60 uppercase">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary-foreground/60 uppercase">
              Clinic
            </p>
            <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/75">
              <p>{CLINIC_ADDRESS}</p>
              <p>{PHONE_NUMBER}</p>
              <p>{EMAIL_ADDRESS}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            The information on this website is for general informational purposes only and is not a
            substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Dr. Neeraj K Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating + mobile bar ---------------- */

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-24 z-40 flex size-13 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 sm:bottom-6"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <Button asChild size="lg" className="rounded-full">
        <a href={PHONE_LINK}>
          <Phone className="size-4" /> Call
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        className="rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
      >
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="size-4" /> WhatsApp
        </a>
      </Button>
    </div>
  );
}
