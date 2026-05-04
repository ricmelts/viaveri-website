import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Code, Zap, Database, Lock, Cloud, Boxes } from 'lucide-react';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-16 border-b border-stone-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-widest text-stone-400 uppercase">For Developers</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mt-3 mb-6">
              ViaRAG: The <em>Fastest</em> RAG Backend Pipeline
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto mb-10">
              Build production-ready RAG (Retrieval-Augmented Generation) applications in minutes,
              not days. The fastest way to add intelligent document retrieval to your backend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://viarag.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Visit ViaRAG
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
              Built for Speed &amp; Simplicity
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Lightning Fast</h3>
                <p className="text-stone-600">
                  Optimized pipeline delivers results in milliseconds. Built with performance-first
                  architecture for production workloads.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Smart Indexing</h3>
                <p className="text-stone-600">
                  Advanced vector database integration with intelligent chunking and embedding
                  strategies for optimal retrieval.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">API-First Design</h3>
                <p className="text-stone-600">
                  RESTful API makes integration seamless. Drop into any backend stack with minimal
                  configuration.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Secure &amp; Private</h3>
                <p className="text-stone-600">
                  Enterprise-grade security with data encryption, access controls, and compliance
                  features built-in.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Boxes className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Scalable Infrastructure</h3>
                <p className="text-stone-600">
                  Horizontally scalable architecture handles everything from prototypes to
                  enterprise-scale deployments.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Developer Experience</h3>
                <p className="text-stone-600">
                  Comprehensive documentation, SDKs for popular languages, and examples to get
                  you started quickly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-4">
              Simple to Integrate
            </h2>
            <p className="text-stone-500 text-lg text-center mb-12">
              Get started with just a few lines of code
            </p>
            <div className="bg-ink rounded-lg p-8 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm">
                <code>{`// Initialize ViaRAG client
import { ViaRAG } from 'viarag';

const client = new ViaRAG({
  apiKey: process.env.VIARAG_API_KEY
});

// Index your documents
await client.index({
  documents: myDocuments,
  namespace: 'my-app'
});

// Query with natural language
const results = await client.query({
  query: "What are the main features?",
  topK: 5
});

console.log(results);`}</code>
              </pre>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-t border-stone-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
              Ready to Build with ViaRAG?
            </h2>
            <p className="text-stone-500 text-lg mb-10">
              Join developers building the next generation of AI-powered applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://viarag.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Get Started Free
                </Button>
              </a>
              <a href="mailto:info@viaveri.co">
                <Button variant="outline" size="lg">
                  Talk to Sales
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
