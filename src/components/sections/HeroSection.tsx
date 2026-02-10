import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight, GraduationCap, Code, Briefcase } from 'lucide-react';

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
    <div id="hero" className="relative overflow-hidden min-h-screen flex items-center py-20 pt-28 md:pt-32 bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800 animate-gradient-x">
      {/* Background gradient orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-viapurple-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

      <Container>
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center opacity-0">
          <div className="inline-flex items-center rounded-full border border-viapurple-400/30 bg-viapurple-800/30 px-3 py-1 text-sm text-viapurple-100 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-success-400 mr-2 animate-pulse"></span>
            Building the Future
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Innovation Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-400 to-accent-400">Technology & Creativity</span>
          </h1>

          <p className="text-lg md:text-xl text-viapurple-50/90 mb-8 max-w-2xl mx-auto">
            ViaVeri builds cutting-edge solutions that transform industries, empower users, and create meaningful impact through innovation and thoughtful design.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16">
            <Button
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
              onClick={() => scrollToSection('projects')}
            >
              Explore Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 active:bg-white/20"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Link to="/schools" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-viapurple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-viapurple-500/30 transition-all">
                <GraduationCap className="h-6 w-6 text-viapurple-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">For Schools</h3>
              <p className="text-viapurple-200 text-sm">
                ViaLearn, the Canvas native assistant.
              </p>
            </Link>

            <Link to="/developers" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/30 transition-all">
                <Code className="h-6 w-6 text-accent-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">For Developers</h3>
              <p className="text-viapurple-200 text-sm">
                ViaRAG, the fastest RAG backend pipeline.
              </p>
            </Link>

            <Link to="/businesses" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-success-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-success-500/30 transition-all">
                <Briefcase className="h-6 w-6 text-success-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">For Businesses</h3>
              <p className="text-viapurple-200 text-sm">
                ViaStaff, AI agent solutions for the workplace.
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;