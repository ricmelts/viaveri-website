import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const DevelopersSection: React.FC = () => {
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
    <section id="developers" className="py-24 bg-stone-50">
      <Container>
        <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">For Developers</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
              ViaRAG
            </h2>
            <p className="font-sans text-xl text-stone-500 font-light max-w-2xl">
              Build production-ready RAG applications in minutes. The fastest way to add intelligent
              document retrieval to your backend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-ink text-lg mb-3">Lightning Fast</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Optimized pipeline delivers results in milliseconds for production workloads.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-ink text-lg mb-3">Smart Indexing</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Advanced vector database integration with intelligent embedding strategies.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-ink text-lg mb-3">API-First Design</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                RESTful API makes integration seamless with any backend stack.
              </p>
            </div>
          </div>

          <div>
            <Link
              to="/developers"
              className="font-sans text-ink underline underline-offset-4 hover:text-stone-600 transition-colors"
            >
              Learn More About ViaRAG
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DevelopersSection;
