import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Mission', id: 'mission' },
    { label: 'Team', id: 'team' },
    { label: 'Projects', id: 'projects' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => isHomePage && scrollToSection('hero')}>
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-viapurple-500 to-accent-500 flex items-center justify-center mr-3">
              <Brain className="h-5 w-5 text-white transform rotate-180" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              ViaVeri
            </span>
          </Link>

          {/* Desktop Navigation */}
          {isHomePage && (
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-viapurple-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
            <a href="mailto:info@viaveri.co">
              <Button variant="primary" size="sm">
                Get in Touch
              </Button>
            </a>

            {/* Mobile Menu Button */}
            {isHomePage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isHomePage && isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white/90 hover:bg-white/10'
                }`}
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