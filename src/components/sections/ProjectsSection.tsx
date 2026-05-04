import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  status: 'live' | 'beta' | 'coming-soon';
}

const ProjectsSection: React.FC = () => {
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

  const projects: Project[] = [
    {
      name: "ViaLearn",
      description: "A Canvas app that helps students plan coursework, and provides teachers with powerful analytics, pre-grading, and performance tracking.",
      tags: ["Education", "AI/ML", "Analytics", "Automation"],
      link: "https://vialearn.io",
      status: "live"
    },
    {
      name: "ViaRAG",
      description: "Fastest way to build RAG applications for backend.",
      tags: ["Open Source", "Cloud", "API"],
      link: "https://viarag.ai",
      status: "live"
    },
    {
      name: "ViaStaff",
      description: "Easy to deploy AI agents, call our demo and learn more.",
      tags: ["Agentic AI", "Automation", "Workflow"],
      link: "tel:248-970-9025",
      status: "live"
    }
  ];

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 bg-stone-50">
      <Container>
        <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">Projects</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
              Our Work
            </h2>
            <p className="font-sans text-xl text-stone-500 font-light max-w-2xl">
              Innovative solutions that push boundaries and create real impact across different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="md:col-span-2 bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow p-10 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">{featured.tags.join(' · ')}</p>
                <h3 className="font-display font-bold text-ink text-3xl mb-4">{featured.name}</h3>
                <p className="font-sans text-stone-600 leading-relaxed">{featured.description}</p>
              </div>
              {featured.link && featured.status === 'live' && (
                <div className="mt-8">
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-ink underline underline-offset-4 hover:text-stone-600 transition-colors"
                  >
                    Visit Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              {rest.map((project, index) => (
                <div
                  key={index}
                  className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow p-8 flex flex-col justify-between flex-1"
                >
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-3">{project.tags.join(' · ')}</p>
                    <h3 className="font-display font-bold text-ink text-xl mb-3">{project.name}</h3>
                    <p className="font-sans text-stone-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  {project.link && project.status === 'live' && (
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-sans text-sm text-ink underline underline-offset-4 hover:text-stone-600 transition-colors"
                      >
                        Visit Project
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-stone-200 bg-white rounded-lg p-10 text-center">
            <h3 className="font-display font-bold text-ink text-2xl mb-3">Have a project idea?</h3>
            <p className="font-sans text-stone-600 mb-6">We're always looking for new challenges and opportunities to innovate.</p>
            <a
              href="mailto:info@viaveri.co"
              className="font-sans text-ink underline underline-offset-4 hover:text-stone-600 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
