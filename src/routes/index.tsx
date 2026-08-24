import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  HeartPulse,
  Activity,
  Video,
  UserRound,
  ShieldCheck,
  MessagesSquare,
  HandHeart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Send,
  X,
  Compass,
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
  PHONE_LINK,
  PHONE_NUMBER,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Neeraj Gupta – Holistic Counselling & Emotional Healing" },
      {
        name: "description",
        content:
          "Transformative 1-on-1 counselling with Dr. Neeraj Gupta. Overcome anxiety, stress, and emotional barriers to achieve lasting peace, happiness, and mindfulness.",
      },
      { property: "og:title", content: "Dr. Neeraj Gupta – Holistic Counselling & Emotional Healing" },
      {
        property: "og:description",
        content:
          "Holistic counselling, mindfulness, and emotional healing with Dr. Neeraj Gupta. Book your session or connect on WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const COVER_IMG = "https://i.ibb.co/gMPSJydf/a98547-470b9a129bc4432ba40ea9a6dc9c2839-mv2.jpg";
const PEACE_IMG = "https://i.ibb.co/9kH3nYN9/11062b-18631521a1244211a1e7d329be6f365d-mv2.jpg";
const COACHING_IMG = "https://i.ibb.co/zTPCLJZq/11062b-d4c33a5ab3034fa688ef1d6c8d02f253-mv2.jpg";
const COUNSELLING_SESSION_IMG = "https://i.ibb.co/ds6yJg6N/IMG-20250129-125034.jpg";
const INFOGRAPHIC_IMG = "https://i.ibb.co/vxjThf7d/Add-a-subheading-1.png";
const CONTACT_HERO_IMG = "https://i.ibb.co/Lzp704px/20e5671799c242d8b8faf5edc41c7311.jpg";

const galleryItems = [
  { url: "https://i.ibb.co/9kyPTpSz/i2-orig-1.png", caption: "Healing session with Dr. Neeraj" },
  { url: "https://i.ibb.co/pvBfz7RK/1000062548.jpg", caption: "Dr. Neeraj with client" },
  { url: "https://i.ibb.co/BKVjRRxf/i1-2.png", caption: "Meditation workshop" },
  { url: "https://i.ibb.co/G6n4JHb/p2-1-orig-1.png", caption: "Cosmic consciousness retreat" },
];

const counsellingHighlights = [
  {
    title: "Relief from Anxiety & Stress",
    desc: "Learn practical tools to manage and overcome the impact of anxiety on your daily life.",
  },
  {
    title: "Emotional Healing",
    desc: "Break free from past pain, trauma, and recurring negative thought patterns.",
  },
  {
    title: "Confidence & Self-Worth",
    desc: "Develop a deep sense of self-belief, clarity, and lasting inner resilience.",
  },
  {
    title: "Relationships & Work-Life Balance",
    desc: "Create peace and harmony across your personal relationships and professional life.",
  },
];

const reasons = [
  { icon: UserRound, title: "Personalized Attention", desc: "Dedicated 1-on-1 unhurried sessions tailored specifically to your journey." },
  { icon: ShieldCheck, title: "Holistic & Mindful Approach", desc: "Combining ancient spiritual wisdom with modern psychological insights." },
  { icon: MessagesSquare, title: "Clear Communication", desc: "You leave every session with actionable clarity and peaceful direction." },
  { icon: HandHeart, title: "Compassionate Healing", desc: "Empowering you to heal from within and experience true transformation." },
];

const testimonials = [
  {
    name: "Vikram Singh",
    location: "Trikuta Nagar, Jammu",
    quote: "Dr. Neeraj’s guidance helped me overcome years of anxiety. His compassionate approach made a real difference in my life.",
  },
  {
    name: "Ananya Mehta",
    location: "Greater Kailash, Delhi",
    quote: "After struggling with work-life balance and high stress, I reached out to Dr. Neeraj. The counselling was truly transformative.",
  },
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    quote: "Emotional healing felt impossible until I started sessions with Dr. Neeraj. Deeply grateful for his holistic wisdom.",
  },
];

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most clients experience noticeable mental and emotional shifts within 3–4 sessions. Sustainable, long-term transformation unfolds over 8–12 weeks.",
  },
  {
    q: "Do I need to be in a specific location?",
    a: "No! Sessions are conducted securely online via video call, allowing you to receive 1-on-1 counselling from anywhere in the world.",
  },
  {
    q: "What issues can counselling help with?",
    a: "Dr. Neeraj specializes in anxiety, stress, emotional healing, confidence building, relationship harmony, and work-life balance.",
  },
  {
    q: "How do I register for a session?",
    a: "Click any 'Register Yourself' or 'Book Session' button on this page. You can fill out a quick form to send your details directly to Dr. Neeraj on WhatsApp, or call us at +91 70064 87936.",
  },
];

function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero onRegisterClick={openModal} />
        <AboutSection onRegisterClick={openModal} />
        <CounsellingSection onRegisterClick={openModal} />
        <GallerySection onRegisterClick={openModal} />
        <WhyChooseSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection onRegisterClick={openModal} />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBar onRegisterClick={openModal} />
      {modalOpen && <RegistrationModal isOpen={modalOpen} onClose={closeModal} />}
    </div>
  );
}

/* ---------------- Hero Section ---------------- */

function Hero({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-accent/8 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            <Sparkles className="size-3.5" />
            Holistic Counselling & Mindful Living
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-primary sm:text-5xl lg:text-[3.4rem]">
            Hi! I&apos;m Dr. Neeraj Gupta
          </h1>
          <div className="mt-5 rounded-2xl border border-border bg-card/60 p-5 shadow-soft">
            <p className="text-base leading-relaxed font-medium text-foreground sm:text-lg">
              &ldquo;My mission is to help <strong>100,000 people</strong> achieve lasting peace, happiness, and a stress-free life through mindful practices, holistic healing, and transformative guidance.&rdquo;
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Button
              onClick={onRegisterClick}
              size="lg"
              className="rounded-full px-7 shadow-soft"
            >
              <Sparkles className="size-4.5" /> Register Yourself
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-whatsapp px-7 text-whatsapp-foreground shadow-soft hover:bg-whatsapp/90"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4.5" /> WhatsApp Dr. Neeraj
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2.2rem] bg-accent/10"
            style={{ transform: "rotate(-3deg)" }}
          />
          <img
            src={COVER_IMG}
            alt="Dr. Neeraj Gupta"
            width={1024}
            height={1280}
            className="relative w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="relative -mt-8 ml-4 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
            <CheckCircle2 className="size-4.5 text-accent" />
            <span className="text-sm font-medium text-primary">
              Mindfulness & Cosmic Consciousness
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section Heading Helper ---------------- */

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

/* ---------------- About Section (My Journey) ---------------- */

function AboutSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead eyebrow="My Journey" title="Dr. Neeraj Gupta – Story & Vision" />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <img
              src={PEACE_IMG}
              alt="Peaceful ambiance"
              width={1200}
              height={1008}
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-lg font-medium text-foreground">
                ✨ <strong>From the foothills of the Himalayas.</strong>
              </p>
              <p>
                Despite a successful medical career, I felt unfulfilled — prescriptions only provided temporary relief, not true healing. The question <em>&ldquo;How can I help people truly heal?&rdquo;</em> grew louder until I could no longer ignore it. I left my practice to seek a deeper solution.
              </p>
              <p>
                Under my enlightened Master, <strong>Dr. Ajay Kotwal</strong>, I discovered Spiritual Enlightenment, Mindfulness, Meditation, and Cosmic Consciousness. He taught me: <em>&ldquo;Consciousness is everywhere; you are an ocean of Consciousness.&rdquo;</em>
              </p>
              <p>
                Blending ancient wisdom with modern psychology, I developed holistic tools for healing. Now, I guide individuals to overcome suffering, find peace, and build resilience. Leaving medicine wasn&apos;t easy, but it was right. Today, I don&apos;t just treat symptoms — I empower people to heal from within and transform their lives.
              </p>
            </div>
            <div className="mt-8">
              <Button onClick={onRegisterClick} className="rounded-full px-7 shadow-soft">
                <Sparkles className="size-4.5" /> Start Your Healing Journey
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Counselling Section ---------------- */

function CounsellingSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section id="counselling" className="scroll-mt-24 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="One-on-One Counselling"
          title="Transformative Personal Guidance"
          sub="Do you feel stuck in your personal life, your career, or both? Customized solutions for any challenges you are facing."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={COUNSELLING_SESSION_IMG}
              alt="Dr. Neeraj Gupta counselling session"
              className="w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-2xl font-bold text-primary">How Do I Counsel?</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              I offer personalized 1-on-1 counselling to help you overcome anxiety, stress, and emotional bottlenecks. With years of dedicated practice, I help clients break free from negative patterns and reclaim lasting well-being.
            </p>
            <ul className="mt-6 space-y-4">
              {counsellingHighlights.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle2 className="size-5 shrink-0 text-accent" />
                  <div>
                    <strong className="text-foreground">{item.title}:</strong>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button onClick={onRegisterClick} size="lg" className="rounded-full px-8 shadow-soft">
                Register For 1-on-1 Session
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Interactive Infographic
              </span>
              <h3 className="mt-2 text-2xl font-bold text-primary">What is One-on-One Consultation?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tailored video sessions conducted with total privacy and customized actionable steps for your life.
              </p>
              <Button onClick={onRegisterClick} variant="outline" className="mt-5 rounded-full">
                Book Session Now
              </Button>
            </div>
            <img
              src={INFOGRAPHIC_IMG}
              alt="What is one on one consultation infographic"
              className="w-full rounded-2xl border border-border/80 object-cover shadow-soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Gallery Section ---------------- */

function GallerySection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Photo Gallery"
          title="Moments of Healing & Transformation"
          sub="Glance through sessions, retreats, and workshops with Dr. Neeraj Gupta."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.url} delay={i * 80}>
              <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary">{item.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose ---------------- */

function WhyChooseSection() {
  return (
    <section className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead eyebrow="Why Patients Stay" title="Why Choose Dr. Neeraj Gupta" />
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

function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Client Experiences"
          title="Words of Healing & Hope"
          sub="Real feedback from individuals who have undergone counselling sessions."
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-accent">{t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- FAQ Section ---------------- */

function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
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

/* ---------------- Contact Section ---------------- */

function ContactSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  const contactItems = [
    { icon: Phone, label: "Phone", value: PHONE_NUMBER, cta: "Call now", href: PHONE_LINK, external: false },
    { icon: WhatsAppIcon, label: "WhatsApp", value: WHATSAPP_NUMBER, cta: "Chat now", href: WHATSAPP_LINK, external: true },
    { icon: Mail, label: "Email", value: EMAIL_ADDRESS, cta: "Send email", href: EMAIL_LINK, external: false },
    { icon: MapPin, label: "Clinic Address", value: CLINIC_ADDRESS, cta: "Get directions", href: MAP_LINK, external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Contact Us"
          title="Connect with Dr. Neeraj Gupta"
          sub="Call, message or register online — we will get back to you promptly."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img src={CONTACT_HERO_IMG} alt="Contact Dr. Neeraj" className="h-48 w-full object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary">Get in Touch Directly</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Ready to begin your 1-on-1 counselling session? Register your details now.
                </p>
                <Button onClick={onRegisterClick} className="mt-4 rounded-full">
                  Register / Connect via Form
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, value, cta, href, external }) => (
                <div
                  key={label}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="flex size-9 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="size-4" />
                  </span>
                  <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {label}
                  </p>
                  <p className="mt-1 flex-1 font-display text-sm font-semibold break-words text-primary">
                    {value}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-4 rounded-full">
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {cta} <ArrowRight className="size-3.5" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-soft">
              <iframe
                title="Clinic location map"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full rounded-[1.4rem] border-0 lg:h-full lg:min-h-[26rem]"
              />
              <div className="p-4 text-center">
                <p className="text-xs font-medium text-muted-foreground">
                  📍 {CLINIC_ADDRESS}
                </p>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  Open in Google Maps ↗
                </a>
              </div>
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
              Holistic counselling, mindfulness, and transformative inner healing.
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
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Counselling", href: "#counselling" },
                { label: "Gallery", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
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
              Visit Us
            </p>
            <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/75">
              <p>{CLINIC_ADDRESS}</p>
              <p>{PHONE_NUMBER}</p>
              <p>{EMAIL_ADDRESS}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Dr. Neeraj Gupta. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://www.instagram.com/pawandeep1729"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground"
            >
              Singh Developments
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating Buttons & Mobile Bar ---------------- */

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

function MobileBar({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <Button onClick={onRegisterClick} size="lg" className="rounded-full">
        Register Now
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

/* ---------------- WhatsApp Registration Modal ---------------- */

function RegistrationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) return;

    const message = `🌟 NEW COUNSELLING ENQUIRY 🌟\n\n📛 Name: ${name.trim()}\n📱 WhatsApp: ${whatsapp.trim()}\n\n🙏 Interested in one-on-one counselling. Please connect.`;
    const url = WHATSAPP_LINK.includes("?")
      ? `${WHATSAPP_LINK.split("?")[0]}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="size-5" />
        </button>

        <div className="text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Sparkles className="size-6" />
          </span>
          <h3 className="mt-3 text-2xl font-bold text-primary">✨ Connect for Counselling</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Fill in your details below to start your WhatsApp chat directly with Dr. Neeraj.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-foreground uppercase">
              📛 Your Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase">
              📱 WhatsApp Number
            </label>
            <input
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="e.g. 7006487936"
              className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <Send className="size-4" /> Send Details via WhatsApp
          </Button>

          <p className="text-center text-[0.75rem] text-muted-foreground">
            Your info will be pre-filled into WhatsApp so Dr. Neeraj can respond directly.
          </p>
        </form>
      </div>
    </div>
  );
}
