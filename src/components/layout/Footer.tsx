import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tight text-ink">ViaVeri</span>
            </Link>
            <p className="text-stone-600 mb-6">
              Innovation through technology, education, and creative solutions.
            </p>
          </div>

          {isHomePage && (
            <div>
              <h3 className="text-ink font-semibold mb-6">Navigate</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-stone-600 hover:text-ink transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('mission')}
                    className="text-stone-600 hover:text-ink transition-colors text-left"
                  >
                    Mission
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-stone-600 hover:text-ink transition-colors text-left"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-ink font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-ink font-semibold mb-6">Contact</h3>
            <div className="flex items-center text-stone-600 mb-4">
              <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
              <a href="mailto:info@viaveri.co" className="hover:text-ink transition-colors">
                info@viaveri.co
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200">
          <div className="text-center text-sm text-stone-400">
            © 2025 ViaVeri. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-stone-600 hover:text-ink transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
