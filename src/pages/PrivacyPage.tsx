import React from 'react';
import Container from '../components/ui/Container';

export default function PrivacyPage() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              We take your privacy seriously. This policy describes what personal information we collect
              and how we use it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Information you provide to us directly</li>
              <li>Information we collect automatically</li>
              <li>Information from third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services,
              to develop new ones, and to protect our company and our users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}