import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { GraduationCap, BookOpen, BarChart3, Clock, Users, CheckCircle } from 'lucide-react';

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-16 border-b border-stone-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-widest text-stone-400 uppercase">For Schools</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mt-3 mb-6">
              ViaLearn: The <em>Canvas</em> Native Assistant
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto mb-10">
              A Canvas app helps students plan coursework, and provides teachers with powerful analytics, pre-grading, and performance tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://vialearn.io" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Visit ViaLearn
                </Button>
              </a>
              <a href="mailto:info@viaveri.co">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-12">
              Powerful Features for Modern Education
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Workflow Automation</h3>
                <p className="text-stone-600">
                  Automate repetitive tasks and streamline administrative processes, giving educators more
                  time to focus on teaching.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Course Planning</h3>
                <p className="text-stone-600">
                  Help students plan their coursework effectively with intelligent scheduling and
                  prerequisite tracking.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Teacher Analytics</h3>
                <p className="text-stone-600">
                  Powerful analytics dashboard for pre-grading, performance tracking, and identifying
                  students who need support.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Canvas Integration</h3>
                <p className="text-stone-600">
                  Seamlessly integrates with Canvas LMS as a native assistant, working within your
                  existing workflow.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Pre-Grading Assistant</h3>
                <p className="text-stone-600">
                  AI-powered pre-grading helps teachers review assignments faster while maintaining
                  academic integrity.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Student Success</h3>
                <p className="text-stone-600">
                  Track student progress, identify at-risk students early, and provide targeted support
                  to improve outcomes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
              Ready to Transform Your Educational Experience?
            </h2>
            <p className="text-stone-500 text-lg mb-10">
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
