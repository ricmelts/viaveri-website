import React, { useState, useRef, useEffect } from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { BookOpen, File, Video, Download, ExternalLink } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'ebook' | 'video' | 'document';
  category: string;
  image: string;
  downloadLink: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Complete Guide to Data Visualization",
    description: "Learn how to create compelling visualizations for complex data sets.",
    type: "ebook",
    category: "Data Science",
    image: "https://images.pexels.com/photos/7947521/pexels-photo-7947521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Web Development Best Practices 2025",
    description: "Stay up-to-date with the latest standards and practices in web development.",
    type: "document",
    category: "Programming",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "User Research Techniques",
    description: "Effective methods for gathering user insights to inform your design decisions.",
    type: "video",
    category: "Design",
    image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Introduction to Algorithmic Trading",
    description: "Learn the basics of algorithmic trading strategies and implementation.",
    type: "ebook",
    category: "Finance",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Social Media Marketing Strategy",
    description: "Build an effective social media strategy for your brand or business.",
    type: "document",
    category: "Marketing",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadLink: "#"
  },
  {
    id: 6,
    title: "Introduction to AI and Machine Learning",
    description: "A beginner-friendly guide to understanding AI and machine learning concepts.",
    type: "video",
    category: "Technology",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadLink: "#"
  }
];

const categories = ["All", "Data Science", "Programming", "Design", "Finance", "Marketing", "Technology"];
const types = ["All", "ebook", "video", "document"];

const ResourcesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeType, setActiveType] = useState<string>("All");
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);
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

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  useEffect(() => {
    const filtered = resources.filter(resource => {
      const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
      const matchesType = activeType === "All" || resource.type === activeType;
      
      return matchesCategory && matchesType;
    });
    
    setFilteredResources(filtered);
  }, [activeCategory, activeType]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ebook':
        return <BookOpen className="h-5 w-5" />;
      case 'document':
        return <File className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <section id="resources" className="py-20 bg-white" ref={sectionRef}>
      <Container>
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educational <span className="text-viapurple-600">Resource Hub</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our library of free educational resources to supplement your learning journey and expand your knowledge.
          </p>
        </div>

        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-700 pt-2">Categories:</span>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-2 text-sm rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-viapurple-100 text-viapurple-700 font-medium"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-700 pt-2">Type:</span>
            {types.map((type) => (
              <button
                key={type}
                className={`px-3 py-2 text-sm rounded-full transition-colors ${
                  activeType === type
                    ? "bg-viapurple-100 text-viapurple-700 font-medium"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveType(type)}
              >
                {type === "All" ? type : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <div 
              key={resource.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <ResourceCard resource={resource} icon={getTypeIcon(resource.type)} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <Button variant="outline" icon={<ExternalLink className="h-4 w-4" />} iconPosition="right">
            View All Resources
          </Button>
        </div>
      </Container>
    </section>
  );
};

interface ResourceCardProps {
  resource: Resource;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, icon }) => {
  return (
    <Card hoverable className="flex flex-col h-full">
      <div className="relative mb-4">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <span className="absolute top-3 left-3 bg-viapurple-600 text-white text-xs px-2 py-1 rounded-full">
          {resource.category}
        </span>
        <span className="absolute top-3 right-3 bg-white text-viapurple-600 text-xs px-2 py-1 rounded-full font-medium flex items-center">
          {icon}
          <span className="ml-1">
            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
          </span>
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
      <div className="mt-auto">
        <Button 
          variant="outline" 
          fullWidth 
          icon={<Download className="h-4 w-4" />}
          iconPosition="left"
        >
          Download Resource
        </Button>
      </div>
    </Card>
  );
};

export default ResourcesSection;