import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ExternalLink, Brain, Code, Sparkles } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  icon: React.ReactNode;
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
      description: "Unified educational platform that automates workflows, helps students plan coursework, and provides teachers with powerful analytics for pre-grading and performance tracking.",
      icon: <Brain className="h-8 w-8" />,
      tags: ["Education", "AI/ML", "Analytics", "Automation"],
      link: "https://vialearn.io",
      status: "live"
    },
    {
      name: "Project Two",
      description: "An innovative solution for [problem space]. Built with cutting-edge technology to deliver exceptional results.",
      icon: <Code className="h-8 w-8" />,
      tags: ["Web", "Cloud", "API"],
      status: "coming-soon"
    },
    {
      name: "Project Three",
      description: "Next-generation platform that combines AI with user-friendly design to create seamless experiences.",
      icon: <Sparkles className="h-8 w-8" />,
      tags: ["AI", "Design", "Innovation"],
      status: "coming-soon"
    }
  ];

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'live':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success-100 text-success-700">Live</span>;
      case 'beta':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-700">Beta</span>;
      case 'coming-soon':
        return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-warning-100 text-warning-700">Coming Soon</span>;
    }
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <Container>
        <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-500 to-accent-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions that push boundaries and create real impact across different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-viapurple-200 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-viapurple-500 to-accent-500 flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                        {getStatusBadge(project.status)}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm bg-viapurple-50 text-viapurple-700 border border-viapurple-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link && project.status === 'live' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          icon={<ExternalLink className="h-4 w-4" />}
                          iconPosition="right"
                          className="border-viapurple-300 text-viapurple-700 hover:bg-viapurple-50"
                        >
                          Visit Project
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-br from-viapurple-50 to-accent-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Have a project idea?</h3>
            <p className="text-gray-600 mb-6">We're always looking for new challenges and opportunities to innovate.</p>
            <a href="mailto:info@viaveri.co">
              <Button variant="primary" size="lg">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
