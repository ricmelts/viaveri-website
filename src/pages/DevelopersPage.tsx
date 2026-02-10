import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Code, Zap, Database, Lock, Cloud, Boxes } from 'lucide-react';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-viapurple-950 via-viapurple-900 to-viapurple-800 py-20 pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-viapurple-400/30 bg-viapurple-800/30 px-3 py-1 text-sm text-viapurple-100 backdrop-blur-sm mb-6">
              <Code className="h-4 w-4 mr-2" />
              For Developers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              ViaRAG: The Fastest RAG Backend Pipeline
            </h1>
            <p className="text-lg md:text-xl text-viapurple-50/90 mb-8">
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
              Built for <span className="text-viapurple-600">Speed & Simplicity</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-600">
                  Optimized pipeline delivers results in milliseconds. Built with performance-first
                  architecture for production workloads.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Indexing</h3>
                <p className="text-gray-600">
                  Advanced vector database integration with intelligent chunking and embedding
                  strategies for optimal retrieval.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">API-First Design</h3>
                <p className="text-gray-600">
                  RESTful API makes integration seamless. Drop into any backend stack with minimal
                  configuration.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with data encryption, access controls, and compliance
                  features built-in.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Boxes className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalable Infrastructure</h3>
                <p className="text-gray-600">
                  Horizontally scalable architecture handles everything from prototypes to
                  enterprise-scale deployments.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-viapurple-100 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-viapurple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
                <p className="text-gray-600">
                  Comprehensive documentation, SDKs for popular languages, and examples to get
                  you started quickly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Simple to Integrate
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Get started with just a few lines of code
            </p>
            <div className="bg-gray-900 rounded-xl p-8 overflow-x-auto">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-viapurple-50 to-accent-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build with ViaRAG?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
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
