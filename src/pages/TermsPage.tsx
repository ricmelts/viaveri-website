import React from 'react';
import Container from '../components/ui/Container';

export default function TermsPage() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing our service, you agree to be bound by these terms of service, all applicable
              laws and regulations, and agree that you are responsible for compliance with any applicable
              local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or
              software) on our website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on our website are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim and negate all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event shall our company or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use our materials.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}