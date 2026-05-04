import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="hero" className="relative bg-white overflow-hidden min-h-screen flex items-center pt-32 pb-24">
      <Container>
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center opacity-0 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-[1.05] tracking-tight mb-6">
            Your <em>Technology</em> Team
          </h1>

          <p className="text-xl text-stone-500 font-sans font-light max-w-xl mx-auto mb-10">
            ViaVeri builds cutting-edge software solutions across industries.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 bg-ink text-white font-sans font-medium px-6 py-3 rounded-lg hover:bg-ink-light transition-colors"
            >
              Explore Our Work
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 border border-ink text-ink font-sans font-medium px-6 py-3 rounded-lg hover:bg-stone-50 transition-colors"
            >
              Learn More
            </button>
          </div>

          <hr className="border-stone-200 mt-20" />

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Link to="/schools" className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-left hover:shadow-md transition-shadow">
              <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-3">For Schools</p>
              <h3 className="font-sans font-bold text-ink mb-2">ViaLearn</h3>
              <p className="text-stone-600 font-sans text-sm">
                The Canvas native AI assistant for students and teachers.
              </p>
            </Link>

            <Link to="/developers" className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-left hover:shadow-md transition-shadow">
              <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-3">For Developers</p>
              <h3 className="font-sans font-bold text-ink mb-2">ViaRAG</h3>
              <p className="text-stone-600 font-sans text-sm">
                The fastest way to build RAG applications.
              </p>
            </Link>

            <Link to="/businesses" className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-left hover:shadow-md transition-shadow">
              <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-3">For Businesses</p>
              <h3 className="font-sans font-bold text-ink mb-2">ViaStaff</h3>
              <p className="text-stone-600 font-sans text-sm">
                An AI agent solution for your workplace that won't break your budget.
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
