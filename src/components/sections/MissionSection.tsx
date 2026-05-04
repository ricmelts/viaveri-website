import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';

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

  const values = [
    {
      number: '01',
      title: 'Passion',
      body: "We're passionate about solving real problems and creating solutions that users love.",
    },
    {
      number: '02',
      title: 'Collaboration',
      body: 'We believe the best solutions come from diverse perspectives working together.',
    },
    {
      number: '03',
      title: 'Integrity',
      body: 'We build trust through transparency, honesty, and ethical practices in everything we do.',
    },
    {
      number: '04',
      title: 'Excellence',
      body: 'We strive for excellence in every detail, from code quality to user experience.',
    },
  ];

  return (
    <section id="mission" className="py-24 bg-stone-50">
      <Container>
        <div ref={sectionRef} className="max-w-5xl mx-auto opacity-0">
          <div className="text-center mb-20">
            <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">Mission</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
              Our Mission & Values
            </h2>
            <p className="font-sans text-xl text-stone-500 font-light max-w-2xl mx-auto">
              To create innovative technology solutions that simplify complex challenges,
              enhance human potential, and drive meaningful progress across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {values.map((value) => (
              <div key={value.number} className="bg-stone-50 p-10">
                <p className="font-sans font-bold text-6xl text-stone-200 mb-4 leading-none">{value.number}</p>
                <h3 className="font-sans font-semibold text-ink text-xl mb-3">{value.title}</h3>
                <p className="font-sans text-stone-600 leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
