import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';

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
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">About</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
                Building technology that opens doors.
              </h2>
              <p className="font-display italic text-xl text-stone-500 leading-relaxed">
                We're on a mission to transform the AI experience by providing custom solutions,
                creative problem-solving, and a commitment to excellence.
              </p>
            </div>

            <div className="space-y-8 pt-2">
              <hr className="border-stone-200" />
              <div>
                <h3 className="font-sans font-semibold text-ink mb-2">Innovation First</h3>
                <p className="font-sans text-stone-600 leading-relaxed">
                  We are committed to developing open-source projects and love to build community through innovative work.
                </p>
              </div>
              <hr className="border-stone-200" />
              <div>
                <h3 className="font-sans font-semibold text-ink mb-2">User-Focused</h3>
                <p className="font-sans text-stone-600 leading-relaxed">
                  Every product we build starts with fixing real people's problems.
                </p>
              </div>
              <hr className="border-stone-200" />
              <div>
                <h3 className="font-sans font-semibold text-ink mb-2">Impact Driven</h3>
                <p className="font-sans text-stone-600 leading-relaxed">
                  We measure success by our positive impact on the community and their feedback to our products.
                </p>
              </div>
              <hr className="border-stone-200" />
              <div>
                <h3 className="font-sans font-semibold text-ink mb-2">Our Story</h3>
                <p className="font-sans text-stone-600 leading-relaxed mb-3">
                  ViaVeri was founded with a simple belief: technology shouldn't be gatekept and education for it should be accessible to everyone.
                </p>
                <p className="font-sans text-stone-600 leading-relaxed">
                  Today, we're proud to work on cutting-edge solutions across education, automation, and beyond.
                  Each project represents our commitment to innovation, quality, and making a real difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
