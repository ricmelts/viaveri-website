import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Briefcase, Bot, TrendingUp, Shield, Workflow, Headphones } from 'lucide-react';

export default function BusinessesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-16 border-b border-stone-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-widest text-stone-400 uppercase">For Businesses</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mt-3 mb-6">
              ViaStaff: AI Agent Solutions for the <em>Workplace</em>
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto mb-10">
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
                <Button variant="outline" size="lg">
                  Email Us
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
              Empower Your Team with AI Agents
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Intelligent Automation</h3>
                <p className="text-stone-600">
                  AI agents handle repetitive tasks, data entry, and routine processes, freeing
                  your team for higher-value work.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">24/7 Support</h3>
                <p className="text-stone-600">
                  Provide round-the-clock customer support with AI agents that understand context
                  and deliver personalized responses.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Workflow Integration</h3>
                <p className="text-stone-600">
                  Seamlessly integrate with your existing tools and systems—no disruption to
                  current workflows.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Boost Productivity</h3>
                <p className="text-stone-600">
                  Increase team efficiency by automating up to 70% of routine tasks, allowing
                  focus on strategic initiatives.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Enterprise Security</h3>
                <p className="text-stone-600">
                  Bank-level security and compliance features protect your sensitive business
                  data at all times.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Tailored for SMBs</h3>
                <p className="text-stone-600">
                  Designed specifically for small and medium businesses—affordable, scalable,
                  and easy to implement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-12">
              Common Use Cases
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="text-xl font-semibold text-ink mb-2">Customer Service</h3>
                <p className="text-stone-600">
                  Handle customer inquiries, schedule appointments, process orders, and provide
                  instant responses to common questions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="text-xl font-semibold text-ink mb-2">Sales &amp; Lead Generation</h3>
                <p className="text-stone-600">
                  Qualify leads, schedule demos, follow up with prospects, and nurture relationships
                  automatically.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="text-xl font-semibold text-ink mb-2">HR &amp; Onboarding</h3>
                <p className="text-stone-600">
                  Automate employee onboarding, answer HR questions, manage time-off requests, and
                  handle routine HR tasks.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="text-xl font-semibold text-ink mb-2">Data Processing</h3>
                <p className="text-stone-600">
                  Extract information from documents, update databases, generate reports, and maintain
                  data accuracy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-t border-stone-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-stone-500 text-lg mb-10">
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
