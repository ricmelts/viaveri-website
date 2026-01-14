import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Users, Award, BookOpen, Sparkles, Target, Rocket } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800 py-20">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-viapurple-400 to-accent-400">ViaVeri</span>
            </h1>
            <p className="text-viapurple-50/90 max-w-2xl mx-auto">
              Transforming education through innovative technology and personalized learning experiences.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2022 at Michigan State University, ViaVeri emerged from a simple yet powerful idea: education should adapt to the learner, not the other way around. Our journey began in the Burgess Startup Accelerator, where we developed our vision for personalized, technology-driven education.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we're proud to be partnered with Instructure Canvas, working together to revolutionize how students learn and educators teach. Our adaptive learning platform combines cutting-edge technology with proven pedagogical methods to create truly personalized learning experiences.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white"/>
              </div>
              <span className="text-sm text-gray-500">+ Our growing team of educators & technologists</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-viapurple-400 to-accent-400 rounded-2xl blur-md opacity-70"></div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team" 
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <div className="mx-auto bg-viapurple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-viapurple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To democratize education by making high-quality learning experiences accessible to everyone, regardless of background or location.
            </p>
          </Card>

          <Card className="text-center">
            <div className="mx-auto bg-viapurple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-viapurple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              A world where every person has the opportunity to reach their full potential through personalized, effective education.
            </p>
          </Card>

          <Card className="text-center">
            <div className="mx-auto bg-viapurple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-viapurple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Innovation, accessibility, quality, and integrity guide everything we do at ViaVeri.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-viapurple-600 mb-2">20k+</div>
            <div className="text-gray-600 flex items-center justify-center">
              <Users className="h-4 w-4 mr-1" />
              Active Students
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-viapurple-600 mb-2">300+</div>
            <div className="text-gray-600 flex items-center justify-center">
              <BookOpen className="h-4 w-4 mr-1" />
              Expert-Led Courses
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-viapurple-600 mb-2">95%</div>
            <div className="text-gray-600 flex items-center justify-center">
              <Award className="h-4 w-4 mr-1" />
              Completion Rate
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-viapurple-600 mb-2">50+</div>
            <div className="text-gray-600 flex items-center justify-center">
              <Users className="h-4 w-4 mr-1" />
              Team Members
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to join our team. Whether you're an educator, developer, or designer, there might be a place for you at ViaVeri.
          </p>
          <Button variant="primary" size="lg">
            View Career Opportunities
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;