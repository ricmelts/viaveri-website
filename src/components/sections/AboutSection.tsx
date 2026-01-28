import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import { Lightbulb, Target, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <div ref={sectionRef} className="max-w-5xl mx-auto opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-500 to-accent-500">ViaVeri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform industries through innovative technology solutions,
              creative problem-solving, and a commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-viapurple-100 mb-4">
                <Lightbulb className="h-8 w-8 text-viapurple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We push boundaries and explore new frontiers in technology to create solutions that make a difference.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                <Target className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Focused</h3>
              <p className="text-gray-600">
                Every product we build starts with understanding the needs of the people who will use it.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-100 mb-4">
                <Zap className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact Driven</h3>
              <p className="text-gray-600">
                We measure success by the positive impact our solutions have on people's lives and workflows.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-viapurple-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ViaVeri was founded with a simple belief: technology should empower people, not complicate their lives.
              From our first project to our current portfolio, we've stayed true to this vision.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to work on cutting-edge solutions across education, automation, and beyond.
              Each project represents our commitment to innovation, quality, and making a real difference.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
