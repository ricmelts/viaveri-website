import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { GraduationCap, BookOpen, BarChart3, Clock, Users, CheckCircle } from 'lucide-react';

export default function SchoolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800 py-20 pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-viapurple-400/30 bg-viapurple-800/30 px-3 py-1 text-sm text-viapurple-100 backdrop-blur-sm mb-6">
              <GraduationCap className="h-4 w-4 mr-2" />
              For Schools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              ViaLearn: The Canvas Native Assistant
            </h1>
            <p className="text-lg md:text-xl text-viapurple-50/90 mb-8">
              A unified educational platform that automates workflows, helps students plan coursework,
              and provides teachers with powerful analytics for pre-grading and performance tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://vialearn.io" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Visit ViaLearn
                </Button>
              </a>
              <a href="mailto:info@viaveri.co">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Powerful Features for <span className="text-viapurple-600">Modern Education</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
                <p className="text-gray-600">
                  Automate repetitive tasks and streamline administrative processes, giving educators more
                  time to focus on teaching.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Course Planning</h3>
                <p className="text-gray-600">
                  Help students plan their coursework effectively with intelligent scheduling and
                  prerequisite tracking.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Teacher Analytics</h3>
                <p className="text-gray-600">
                  Powerful analytics dashboard for pre-grading, performance tracking, and identifying
                  students who need support.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Canvas Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrates with Canvas LMS as a native assistant, working within your
                  existing workflow.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pre-Grading Assistant</h3>
                <p className="text-gray-600">
                  AI-powered pre-grading helps teachers review assignments faster while maintaining
                  academic integrity.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Student Success</h3>
                <p className="text-gray-600">
                  Track student progress, identify at-risk students early, and provide targeted support
                  to improve outcomes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-viapurple-50 to-accent-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Educational Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join schools already using ViaLearn to streamline workflows and enhance student success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://vialearn.io" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Get Started with ViaLearn
                </Button>
              </a>
              <a href="mailto:info@viaveri.co">
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
