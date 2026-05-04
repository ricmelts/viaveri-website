import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { OPEN_PRODUCTS_POPUP_EVENT } from '../ui/ProductsPopup';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const openConsulting = () => {
    window.dispatchEvent(new CustomEvent(OPEN_PRODUCTS_POPUP_EVENT));
    setIsMobileMenuOpen(false);
  };

  type NavLink =
    | { label: string; id: string; action?: undefined }
    | { label: string; action: 'consulting'; id?: undefined };

  const navLinks: NavLink[] = [
    { label: 'About', id: 'about' },
    { label: 'Mission', id: 'mission' },
    { label: 'Schools', id: 'schools' },
    { label: 'Developers', id: 'developers' },
    { label: 'Businesses', id: 'businesses' },
    { label: 'Projects', id: 'projects' },
    { label: 'Consulting', action: 'consulting' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center" onClick={() => isHomePage && scrollToSection('hero')}>
            <span className="text-xl font-bold tracking-tight text-ink">ViaVeri</span>
          </Link>

          {isHomePage && (
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id ?? link.action}
                  onClick={() =>
                    link.action === 'consulting'
                      ? openConsulting()
                      : scrollToSection(link.id!)
                  }
                  className="text-sm font-medium text-stone-600 hover:text-ink transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
            {!isHomePage && (
              <button
                onClick={openConsulting}
                className="text-sm font-medium text-stone-600 hover:text-ink transition-colors"
              >
                Consulting
              </button>
            )}
            <a href="mailto:info@viaveri.co">
              <Button variant="outline" size="sm">
                Get in Touch
              </Button>
            </a>

            {isHomePage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-ink"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>

        {isHomePage && isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-b border-stone-200 pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id ?? link.action}
                onClick={() =>
                  link.action === 'consulting'
                    ? openConsulting()
                    : scrollToSection(link.id!)
                }
                className="text-left py-2 px-4 rounded-lg text-sm font-medium text-stone-600 hover:text-ink hover:bg-stone-100 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
