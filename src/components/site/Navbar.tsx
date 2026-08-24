import { useEffect, useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, WHATSAPP_LINK, LOGO_IMG } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={LOGO_IMG} alt="Dr. Neeraj Logo" className="size-9 rounded-xl object-cover shadow-soft" />
          <span className="font-display text-lg font-bold tracking-tight text-primary">
            Dr. Neeraj K Gupta
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button
            asChild
            size="icon"
            variant="outline"
            className="size-10 rounded-full border-accent/30 bg-accent/10 text-accent hover:bg-accent/15 hover:text-accent"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <WhatsAppIcon className="size-4.5" />
            </a>
          </Button>
          <Button asChild className="rounded-full px-5 shadow-soft">
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 grid grid-cols-2 gap-2">
            <Button asChild className="rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Book
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
