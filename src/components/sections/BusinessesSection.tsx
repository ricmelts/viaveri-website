import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Briefcase, Bot, TrendingUp, Workflow, ArrowRight } from 'lucide-react';

const BusinessesSection: React.FC = () => {
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
    <section id="businesses" className="py-24 bg-white">
      <Container>
        <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-success-200 bg-success-50 px-3 py-1 text-sm text-success-700 mb-4">
              <Briefcase className="h-4 w-4 mr-2" />
              For Businesses
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ViaStaff: <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-500 to-accent-500">AI Agent Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent AI agents that automate workflows, handle customer inquiries, and streamline
              operations for small to medium-sized businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-success-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Intelligent Automation</h3>
              <p className="text-gray-600 text-sm">
                AI agents handle repetitive tasks, freeing your team for higher-value work.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center mb-4">
                <Workflow className="h-6 w-6 text-success-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Workflow Integration</h3>
              <p className="text-gray-600 text-sm">
                Seamlessly integrate with your existing tools—no disruption to workflows.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-success-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Boost Productivity</h3>
              <p className="text-gray-600 text-sm">
                Increase efficiency by automating up to 70% of routine tasks.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/businesses">
              <Button
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Learn More About ViaStaff
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessesSection;
