import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Mail } from 'lucide-react';
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
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-viapurple-500 to-accent-500 flex items-center justify-center mr-3">
                <Brain className="h-5 w-5 text-white transform rotate-180" />
              </div>
              <span className="text-xl font-bold text-white">
                ViaVeri
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Innovation through technology, education, and creative solutions.
            </p>
          </div>

          {isHomePage && (
            <div>
              <h3 className="text-white font-semibold mb-6">Navigate</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-viapurple-400 transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('mission')}
                    className="hover:text-viapurple-400 transition-colors text-left"
                  >
                    Mission
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('team')}
                    className="hover:text-viapurple-400 transition-colors text-left"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="hover:text-viapurple-400 transition-colors text-left"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <div className="flex items-center text-gray-400 mb-4">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:info@viaveri.co" className="hover:text-viapurple-400 transition-colors">
                info@viaveri.co
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="text-center text-sm text-gray-500">
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
        className="hover:text-viapurple-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;