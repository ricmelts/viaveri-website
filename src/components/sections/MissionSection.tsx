import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import { Heart, Users, Rocket, Shield } from 'lucide-react';

const MissionSection: React.FC = () => {
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
    <section id="mission" className="py-24 bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800">
      <Container>
        <div ref={sectionRef} className="max-w-5xl mx-auto opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-viapurple-100 max-w-3xl mx-auto">
              We believe in building technology that transforms lives, empowers communities,
              and creates lasting positive change.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-white/20">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-viapurple-400 to-accent-400 flex items-center justify-center mr-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-viapurple-100 text-lg leading-relaxed">
                  To create innovative technology solutions that simplify complex challenges,
                  enhance human potential, and drive meaningful progress across industries.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-viapurple-500/20 flex items-center justify-center mr-3">
                  <Heart className="h-5 w-5 text-viapurple-300" />
                </div>
                <h4 className="text-xl font-semibold text-white">Passion</h4>
              </div>
              <p className="text-viapurple-200">
                We're passionate about solving real problems and creating solutions that users love.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-accent-300" />
                </div>
                <h4 className="text-xl font-semibold text-white">Collaboration</h4>
              </div>
              <p className="text-viapurple-200">
                We believe the best solutions come from diverse perspectives working together.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-success-500/20 flex items-center justify-center mr-3">
                  <Shield className="h-5 w-5 text-success-300" />
                </div>
                <h4 className="text-xl font-semibold text-white">Integrity</h4>
              </div>
              <p className="text-viapurple-200">
                We build trust through transparency, honesty, and ethical practices in everything we do.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-warning-500/20 flex items-center justify-center mr-3">
                  <Rocket className="h-5 w-5 text-warning-300" />
                </div>
                <h4 className="text-xl font-semibold text-white">Excellence</h4>
              </div>
              <p className="text-viapurple-200">
                We strive for excellence in every detail, from code quality to user experience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
