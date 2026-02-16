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
              We're on a mission to transform business AI experience by providing custom solutions,
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
                We are committed to developing open-source projects and love to build community through innovative projects.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                <Target className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Focused</h3>
              <p className="text-gray-600">
                Every product we build starts with fixing real people's problems. 
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-100 mb-4">
                <Zap className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact Driven</h3>
              <p className="text-gray-600">
                We measure success by our positive impact on the community and their feedback to our products.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-viapurple-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ViaVeri was founded with a simple belief: technology shouldn't be gatekept and education for it should be accessible to everyone.
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
