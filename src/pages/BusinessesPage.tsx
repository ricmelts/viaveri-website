import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Briefcase, Bot, TrendingUp, Shield, Workflow, Headphones } from 'lucide-react';

export default function BusinessesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800 py-20 pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-viapurple-400/30 bg-viapurple-800/30 px-3 py-1 text-sm text-viapurple-100 backdrop-blur-sm mb-6">
              <Briefcase className="h-4 w-4 mr-2" />
              For Businesses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              ViaStaff: AI Agent Solutions for the Workplace
            </h1>
            <p className="text-lg md:text-xl text-viapurple-50/90 mb-8">
              Intelligent AI agents that automate workflows, handle customer inquiries, and streamline
              operations for small to medium-sized businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:248-970-9025">
                <Button size="lg">
                  Call: 248-970-9025
                </Button>
              </a>
              <a href="mailto:info@viaveri.co">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Email Us
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
              Empower Your Team with <span className="text-viapurple-600">AI Agents</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Automation</h3>
                <p className="text-gray-600">
                  AI agents handle repetitive tasks, data entry, and routine processes, freeing
                  your team for higher-value work.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Provide round-the-clock customer support with AI agents that understand context
                  and deliver personalized responses.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Workflow Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrate with your existing tools and systems—no disruption to
                  current workflows.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Boost Productivity</h3>
                <p className="text-gray-600">
                  Increase team efficiency by automating up to 70% of routine tasks, allowing
                  focus on strategic initiatives.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level security and compliance features protect your sensitive business
                  data at all times.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tailored for SMBs</h3>
                <p className="text-gray-600">
                  Designed specifically for small and medium businesses—affordable, scalable,
                  and easy to implement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Use Cases
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-gray-600">
                  Handle customer inquiries, schedule appointments, process orders, and provide
                  instant responses to common questions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Sales & Lead Generation</h3>
                <p className="text-gray-600">
                  Qualify leads, schedule demos, follow up with prospects, and nurture relationships
                  automatically.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">HR & Onboarding</h3>
                <p className="text-gray-600">
                  Automate employee onboarding, answer HR questions, manage time-off requests, and
                  handle routine HR tasks.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
                <p className="text-gray-600">
                  Extract information from documents, update databases, generate reports, and maintain
                  data accuracy.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how ViaStaff can help automate your workflows and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:248-970-9025">
                <Button size="lg">
                  Call Now: 248-970-9025
                </Button>
              </a>
              <a href="mailto:info@viaveri.co">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
