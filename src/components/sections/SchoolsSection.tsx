import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { GraduationCap, BookOpen, BarChart3, Clock, ArrowRight } from 'lucide-react';

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
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-viapurple-200 bg-viapurple-50 px-3 py-1 text-sm text-viapurple-700 mb-4">
              <GraduationCap className="h-4 w-4 mr-2" />
              For Schools
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ViaLearn: The <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-500 to-accent-500">Canvas Native Assistant</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unified educational platform that automates workflows, helps students plan coursework,
              and provides teachers with powerful analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-viapurple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Workflow Automation</h3>
              <p className="text-gray-600 text-sm">
                Automate repetitive tasks and streamline administrative processes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-viapurple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Course Planning</h3>
              <p className="text-gray-600 text-sm">
                Help students plan their coursework with intelligent scheduling.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-viapurple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teacher Analytics</h3>
              <p className="text-gray-600 text-sm">
                Powerful analytics for pre-grading and performance tracking.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/schools">
              <Button
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Learn More About ViaLearn
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SchoolsSection;
