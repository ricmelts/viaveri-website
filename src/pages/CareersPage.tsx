import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Code, Palette, ArrowRight, MapPin, Clock, Building2 } from 'lucide-react';

interface JobPosition {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
}

const positions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "East Lansing, MI (Hybrid)",
    department: "Engineering",
    description: "We're looking for an experienced full-stack developer to help build and scale our educational platform. You'll work with modern technologies including React, Node.js, and cloud services."
  },
  {
    id: 2,
    title: "UX/UI Designer",
    type: "Full-time",
    location: "East Lansing, MI (Hybrid)",
    department: "Design",
    description: "Join our design team to create intuitive and engaging user experiences for our educational platform. You'll work closely with product and engineering teams to bring designs to life."
  },
  {
    id: 3,
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote (US)",
    department: "Engineering",
    description: "Help build beautiful, responsive, and accessible user interfaces using React and modern frontend technologies."
  }
];

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-viapurple-600">Mission</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're building the future of education technology at ViaVeri. Join our team of passionate
              educators, developers, and innovators making a difference in how people learn.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">View Open Positions</Button>
              <Button variant="outline" size="lg">Learn About Culture</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Why Join ViaVeri?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="mx-auto bg-viapurple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-viapurple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Tech Stack</h3>
              <p className="text-gray-600">
                Work with cutting-edge technologies and contribute to innovative solutions in education.
              </p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto bg-viapurple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-viapurple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Startup Culture</h3>
              <p className="text-gray-600">
                Be part of a dynamic startup environment where your ideas and contributions matter.
              </p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto bg-viapurple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-viapurple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creative Freedom</h3>
              <p className="text-gray-600">
                Have the autonomy to innovate and bring your creative solutions to life.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Open Positions Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position) => (
              <Card key={position.id} hoverable className="transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{position.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button 
                      variant="outline"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Application Process</h2>
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Application Review"
                description="Submit your application and we'll carefully review your experience and qualifications."
              />
              <ProcessStep
                number="2"
                title="Initial Interview"
                description="Meet with our team to discuss your background and learn more about the role."
              />
              <ProcessStep
                number="3"
                title="Technical Assessment"
                description="Complete a take-home project or technical interview relevant to your role."
              />
              <ProcessStep
                number="4"
                title="Team Interview"
                description="Meet potential teammates and learn about our culture and working style."
              />
              <ProcessStep
                number="5"
                title="Offer & Welcome"
                description="Receive and review your offer, then join our team!"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="bg-viapurple-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
            <p className="text-viapurple-100 mb-8 max-w-2xl mx-auto">
              Join our team and help shape the future of education technology. We're always looking for
              talented individuals who share our passion for innovation and learning.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-viapurple-600 hover:bg-gray-100"
            >
              View All Positions
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-6">
        <div className="w-10 h-10 rounded-full bg-viapurple-600 text-white flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CareersPage;