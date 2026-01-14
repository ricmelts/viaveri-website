import React, { useState } from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom, <span className="text-viapurple-600">Individualized</span> Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for you or your institution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Student Plan */}
            <Card hoverable className="relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-viapurple-100 text-viapurple-700 px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Student</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-viapurple-600">Free</span>
                  <span className="text-gray-500 ml-2">forever</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <Feature text="Syllabus auto-planning" />
                <Feature text="Assignment pre-grading" />
                <Feature text="Textbook Q&A" />
                <Feature text="Canvas integration" />
                <Feature text="Basic analytics" />
              </div>
              <Button 
                variant="primary" 
                fullWidth
                onClick={() => setShowDownloadModal(true)}
              >
                Get Started
              </Button>
            </Card>

            {/* Institution Plan */}
            <Card hoverable className="relative overflow-hidden border-2 border-viapurple-200">
              <div className="absolute top-4 right-4 bg-viapurple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Enterprise
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Institution</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-viapurple-600">Custom</span>
                  <span className="text-gray-500 ml-2">per institution</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <Feature text="Everything in Student plan" />
                <Feature text="Advanced analytics dashboard" />
                <Feature text="Custom integrations" />
                <Feature text="Priority support" />
                <Feature text="Dedicated account manager" />
                <Feature text="Custom features" />
              </div>
              <a href="mailto:info@viaveri.co">
                <Button variant="outline" fullWidth>
                  Get Quote
                </Button>
              </a>
            </Card>
          </div>
        </Container>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">Downloads Currently Closed</h3>
            <p className="text-gray-600 mb-6">
              Soft-launch downloads are now closed.
            </p>
            <Button 
              variant="primary" 
              fullWidth
              onClick={() => setShowDownloadModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

interface FeatureProps {
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ text }) => (
  <div className="flex items-center">
    <Check className="h-5 w-5 text-viapurple-600 mr-2" />
    <span className="text-gray-600">{text}</span>
  </div>
);

export default PricingSection;