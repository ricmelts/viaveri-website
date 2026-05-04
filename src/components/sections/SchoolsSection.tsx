import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const SchoolsSection: React.FC = () => {
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
    <section id="schools" className="py-24 bg-white">
      <Container>
        <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">For Schools</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
              ViaLearn
            </h2>
            <p className="font-sans text-xl text-stone-500 font-light max-w-2xl">
              A unified Canvas plugin that helps students plan coursework
              and provides teachers with powerful analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-ink text-lg mb-3">Workflow Automation</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Automatically retrieve assignments, get custom feedback, and more.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-ink text-lg mb-3">Course Planning</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Use plain english to make your plans.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-ink text-lg mb-3">Teacher Analytics</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Pre-grade assignments before final destinations and track problems before they arise on the exam.
              </p>
            </div>
          </div>

          <div>
            <Link
              to="/schools"
              className="font-sans text-ink underline underline-offset-4 hover:text-stone-600 transition-colors"
            >
              Learn More About ViaLearn
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SchoolsSection;
