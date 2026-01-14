import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';

const PartnershipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with <span className="text-viapurple-600">ViaVeri</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with industry leaders to deliver exceptional educational experiences. As an Instructure Canvas partner, we're transforming how institutions deliver online learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <div className="mx-auto bg-viapurple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-viapurple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Canvas Integration</h3>
            <p className="text-gray-600">
              Seamlessly integrate with Canvas LMS to enhance your institution's learning experience.
            </p>
          </Card>

          <Card className="text-center">
            <div className="mx-auto bg-viapurple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-viapurple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Collaborative Learning</h3>
            <p className="text-gray-600">
              Foster engagement through collaborative tools and interactive features.
            </p>
          </Card>

          <Card className="text-center">
            <div className="mx-auto bg-viapurple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-viapurple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Certified Partner</h3>
            <p className="text-gray-600">
              Access exclusive resources and support as a certified Canvas partner.
            </p>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-viapurple-900 to-viapurple-800 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Partner Network
              </h2>
              <p className="text-viapurple-100 mb-6">
                Become a ViaVeri partner and help shape the future of education technology. We offer comprehensive support, resources, and collaboration opportunities.
              </p>
              <Button 
                variant="primary"
                size="lg"
                className="bg-white text-viapurple-600 hover:bg-gray-100"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Partner With Us
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Partnership collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard
              title="Technical Integration Support"
              description="Get dedicated technical support for seamless Canvas LMS integration and customization."
            />
            <BenefitCard
              title="Marketing Collaboration"
              description="Joint marketing opportunities and co-branded materials to reach wider audiences."
            />
            <BenefitCard
              title="Professional Development"
              description="Access to training resources and certification programs for your team."
            />
            <BenefitCard
              title="Priority Support"
              description="Dedicated partner support channel and priority issue resolution."
            />
          </div>
        </div>

        <div className="text-center pb-16">
          <h2 className="text-3xl font-bold mb-8">Ready to Partner?</h2>
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="h-5 w-5" />}
            iconPosition="right"
          >
            Contact Our Partnership Team
          </Button>
        </div>
      </Container>
    </div>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <Card hoverable className="p-8">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default PartnershipsPage;