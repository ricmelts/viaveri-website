import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Code, Zap, Database, Cloud, ArrowRight } from 'lucide-react';

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
    <section id="developers" className="py-24 bg-gray-50">
      <Container>
        <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-sm text-accent-700 mb-4">
              <Code className="h-4 w-4 mr-2" />
              For Developers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ViaRAG: The <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-500 to-accent-500">Fastest RAG Backend</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build production-ready RAG applications in minutes. The fastest way to add intelligent
              document retrieval to your backend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                Optimized pipeline delivers results in milliseconds for production workloads.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Indexing</h3>
              <p className="text-gray-600 text-sm">
                Advanced vector database integration with intelligent embedding strategies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">API-First Design</h3>
              <p className="text-gray-600 text-sm">
                RESTful API makes integration seamless with any backend stack.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/developers">
              <Button
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Learn More About ViaRAG
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DevelopersSection;
