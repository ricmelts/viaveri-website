import React, { useEffect, useState } from 'react';
import { X, Globe, Brain, Briefcase, ArrowRight, Check } from 'lucide-react';

// Replace with your real booking URLs (Google Calendar appointment schedule,
// Calendly, Cal.com, etc.). Each card opens its own booking page.
const BOOKING_LINKS = {
  website: 'https://calendar.app.google/jiKdgm3onaX4xLSP6',
  aiAudit: 'https://calendar.app.google/5tVVWiztn5pXqzhC8',
  consulting: 'mailto:info@viaveri.co?subject=Hands-On%20Consulting%20Inquiry',
};

const STORAGE_KEY = 'viaveri_products_popup_seen';
export const OPEN_PRODUCTS_POPUP_EVENT = 'viaveri:open-products';

interface Product {
  id: string;
  icon: React.ReactNode;
  badge?: string;
  title: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  image?: string;
  accent: 'viapurple' | 'accent' | 'success';
  highlight?: boolean;
}

const products: Product[] = [
  {
    id: 'website',
    icon: <Globe className="h-6 w-6" />,
    badge: 'Launch Offer',
    title: '$499 Websites',
    price: '$499',
    priceSuffix: 'one-time',
    description: 'Bring your idea, shop, or blog to life — fast, beautifully, without the back-and-forth.',
    features: [
      'Custom design',
      'Mobile optimized',
      'Hosting included',
      'Live in 24 hours',
    ],
    cta: 'Book a call',
    href: BOOKING_LINKS.website,
    accent: 'viapurple',
  },
  {
    id: 'ai-audit',
    icon: <Brain className="h-6 w-6" />,
    badge: 'Most Popular',
    title: 'AI Audit',
    price: '$1,499',
    priceSuffix: '3-hour deep dive',
    description:
      'A 3-hour session with three specialists — a Double-PhD computer scientist, a Cybersecurity master, and an AI business-scaling expert — mapping how to leverage new and existing AI tools across your business.',
    features: [
      'Double-PhD Computer Scientist',
      'Masters in Cybersecurity',
      'AI business scaling pro',
      'Actionable written report',
    ],
    cta: 'Book your audit',
    href: BOOKING_LINKS.aiAudit,
    accent: 'accent',
    highlight: true,
  },
  {
    id: 'consulting',
    icon: <Briefcase className="h-6 w-6" />,
    badge: 'Enterprise',
    title: 'Hands-On Consulting',
    price: "Let's talk",
    priceSuffix: 'custom scope',
    description:
      'Long-term partnership for teams that need us embedded — building, integrating, and scaling AI systems alongside your staff.',
    features: [
      'Dedicated engineering',
      'Custom AI systems',
      'Ongoing optimization',
      'Priority support',
    ],
    cta: 'Inquire now',
    href: BOOKING_LINKS.consulting,
    accent: 'success',
  },
];

const accentStyles = {
  viapurple: {
    iconBg: 'bg-viapurple-500/20 text-viapurple-300',
    badge: 'bg-viapurple-500/20 text-viapurple-200 border-viapurple-400/30',
    price: 'text-white',
    button:
      'bg-viapurple-500 hover:bg-viapurple-600 active:bg-viapurple-700 text-white',
    ring: 'hover:border-viapurple-400/40',
    check: 'text-viapurple-300',
  },
  accent: {
    iconBg: 'bg-accent-500/20 text-accent-300',
    badge: 'bg-accent-500/20 text-accent-200 border-accent-400/30',
    price: 'text-white',
    button: 'bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white',
    ring: 'hover:border-accent-400/40',
    check: 'text-accent-300',
  },
  success: {
    iconBg: 'bg-success-500/20 text-success-300',
    badge: 'bg-success-500/20 text-success-200 border-success-400/30',
    price: 'text-white',
    button:
      'bg-success-500 hover:bg-success-600 active:bg-success-700 text-white',
    ring: 'hover:border-success-400/40',
    check: 'text-success-300',
  },
};

const ProductsPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onExternalOpen = () => setIsOpen(true);
    window.addEventListener(OPEN_PRODUCTS_POPUP_EVENT, onExternalOpen);

    const seen = sessionStorage.getItem(STORAGE_KEY);
    const timer = seen
      ? null
      : window.setTimeout(() => setIsOpen(true), 600);

    return () => {
      window.removeEventListener(OPEN_PRODUCTS_POPUP_EVENT, onExternalOpen);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="products-popup-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />

      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800 border border-white/10 shadow-2xl animate-slide-up">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-viapurple-500 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent-500 rounded-full opacity-20 blur-3xl pointer-events-none" />

        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center rounded-full border border-viapurple-400/30 bg-viapurple-800/30 px-3 py-1 text-sm text-viapurple-100 backdrop-blur-sm mb-4">
              <span className="flex h-2 w-2 rounded-full bg-success-400 mr-2 animate-pulse" />
              Special Offers
            </div>
            <h2
              id="products-popup-title"
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
            >
              Pick what fits your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-400 to-accent-400">
                next move
              </span>
            </h2>
            <p className="text-viapurple-100/80">
              From a fast launch site to a full AI strategy audit — book a time that works and we'll take it from there.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((p) => {
              const styles = accentStyles[p.accent];
              return (
                <div
                  key={p.id}
                  className={`relative flex flex-col rounded-xl border bg-white/5 backdrop-blur-sm p-6 transition-all ${
                    p.highlight
                      ? 'border-accent-400/50 ring-1 ring-accent-400/30 md:-translate-y-2'
                      : 'border-white/10'
                  } ${styles.ring}`}
                >
                  {p.badge && (
                    <span
                      className={`absolute -top-3 left-6 inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium ${styles.badge}`}
                    >
                      {p.badge}
                    </span>
                  )}

                  {p.image && (
                    <div className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-viapurple-950/50">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-36 object-cover"
                      />
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${styles.iconBg}`}
                  >
                    {p.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1">
                    {p.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-3xl font-bold ${styles.price}`}>
                      {p.price}
                    </span>
                    {p.priceSuffix && (
                      <span className="text-sm text-viapurple-200/80">
                        {p.priceSuffix}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-viapurple-100/80 mb-5">
                    {p.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-viapurple-50"
                      >
                        <Check
                          className={`h-4 w-4 mt-0.5 flex-shrink-0 ${styles.check}`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.href}
                    target={p.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      p.href.startsWith('http') ? 'noopener noreferrer' : undefined
                    }
                    onClick={close}
                    className={`mt-auto inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg font-medium transition-colors ${styles.button}`}
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-viapurple-200/70">
            Questions? Email{' '}
            <a
              href="mailto:eric@viaveri.co"
              className="underline hover:text-white"
            >
              eric@viaveri.co
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPopup;
