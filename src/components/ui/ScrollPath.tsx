import React, { useEffect, useState } from 'react';
import { Home, Info, Target, GraduationCap, Code, Briefcase, FolderOpen } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const ScrollPath: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const sections: Section[] = [
    { id: 'hero', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { id: 'about', label: 'About', icon: <Info className="h-4 w-4" /> },
    { id: 'mission', label: 'Mission', icon: <Target className="h-4 w-4" /> },
    { id: 'schools', label: 'Schools', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'developers', label: 'Developers', icon: <Code className="h-4 w-4" /> },
    { id: 'businesses', label: 'Businesses', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      let currentSection = 'hero';

      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Background path line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Animated progress line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-viapurple-500 to-accent-500 transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        ></div>

        {/* Section markers */}
        <div className="relative flex flex-col gap-12 py-2">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const sectionIndex = sections.findIndex(s => s.id === activeSection);
            const isPassed = index <= sectionIndex;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center justify-end gap-3"
                aria-label={`Scroll to ${section.label}`}
              >
                {/* Label - appears on hover */}
                <span
                  className={`absolute right-full mr-4 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'opacity-100 translate-x-0 bg-viapurple-600 text-white'
                      : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-gray-900 text-white'
                  }`}
                >
                  {section.label}
                </span>

                {/* Marker dot */}
                <div
                  className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-viapurple-600 border-viapurple-600 text-white shadow-lg shadow-viapurple-300 scale-110'
                      : isPassed
                      ? 'bg-white border-viapurple-400 text-viapurple-600'
                      : 'bg-white border-gray-300 text-gray-400 group-hover:border-viapurple-300 group-hover:text-viapurple-500'
                  }`}
                >
                  {section.icon}

                  {/* Pulse animation for active section */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-viapurple-400 animate-ping opacity-75"></span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="mt-8 text-center">
        <div className="text-xs font-medium text-gray-500">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
};

export default ScrollPath;
