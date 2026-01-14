import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <Link to="/" className="flex items-center">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-viapurple-500 to-accent-500 flex items-center justify-center mr-3">
              <Brain className="h-5 w-5 text-white transform rotate-180" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              ViaLearn
            </span>
          </Link>

          <a href="mailto:info@viaveri.co">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;