import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

const TeamSection: React.FC = () => {
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

  // Placeholder team data - replace with actual team information
  const team: TeamMember[] = [
    {
      name: "Team Member",
      role: "Founder & CEO",
      bio: "Passionate about building innovative solutions that make a difference.",
      email: "info@viaveri.co"
    },
    {
      name: "Team Member",
      role: "Lead Developer",
      bio: "Creating elegant code and exceptional user experiences.",
      email: "info@viaveri.co"
    },
    {
      name: "Team Member",
      role: "Product Designer",
      bio: "Designing intuitive interfaces that users love.",
      email: "info@viaveri.co"
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <Container>
        <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-500 to-accent-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of innovators, creators, and problem-solvers dedicated to building the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-viapurple-400 to-accent-400 mx-auto flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-viapurple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>

                <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-viapurple-50 text-viapurple-600 hover:bg-viapurple-100 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-accent-50 text-accent-600 hover:bg-accent-100 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to join our team?</p>
            <a
              href="mailto:info@viaveri.co"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-viapurple-600 text-white font-medium hover:bg-viapurple-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
