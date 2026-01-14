import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Search, Book, MessageCircle, Phone, Mail, FileText, HelpCircle, ExternalLink, ArrowRight } from 'lucide-react';

const HelpCenterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How can we <span className="text-viapurple-600">help you?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions or get in touch with our support team.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-viapurple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <QuickLinkCard
            icon={<Book className="h-6 w-6" />}
            title="Documentation"
            description="Browse our comprehensive guides and tutorials"
          />
          <QuickLinkCard
            icon={<MessageCircle className="h-6 w-6" />}
            title="Community Forum"
            description="Connect with other users and share experiences"
          />
          <QuickLinkCard
            icon={<Phone className="h-6 w-6" />}
            title="Contact Support"
            description="Get help from our dedicated support team"
          />
        </div>

        {/* Popular Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TopicCard
              title="Getting Started"
              items={[
                "Creating your account",
                "Platform overview",
                "First steps guide",
                "Basic navigation"
              ]}
            />
            <TopicCard
              title="Account & Settings"
              items={[
                "Profile management",
                "Security settings",
                "Notification preferences",
                "Billing information"
              ]}
            />
            <TopicCard
              title="Course Access"
              items={[
                "Enrolling in courses",
                "Accessing materials",
                "Progress tracking",
                "Certificates"
              ]}
            />
            <TopicCard
              title="Technical Support"
              items={[
                "System requirements",
                "Troubleshooting",
                "Browser compatibility",
                "Mobile access"
              ]}
            />
            <TopicCard
              title="Billing & Payments"
              items={[
                "Payment methods",
                "Subscription plans",
                "Refund policy",
                "Invoice requests"
              ]}
            />
            <TopicCard
              title="Privacy & Security"
              items={[
                "Data protection",
                "Privacy settings",
                "Security measures",
                "Terms of service"
              ]}
            />
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-viapurple-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-viapurple-100 mb-6">
                Our support team is available 24/7 to assist you with any questions or concerns you may have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>support@viaveri.co</span>
                </div>
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="mt-8">
                <Button 
                  variant="primary"
                  size="lg"
                  className="bg-white text-viapurple-600 hover:bg-gray-100"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Contact Support
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Support team"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

interface QuickLinkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ icon, title, description }) => {
  return (
    <Card hoverable className="flex items-start p-6">
      <div className="bg-viapurple-100 p-3 rounded-lg mr-4">
        <div className="text-viapurple-600">{icon}</div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Card>
  );
};

interface TopicCardProps {
  title: string;
  items: string[];
}

const TopicCard: React.FC<TopicCardProps> = ({ title, items }) => {
  return (
    <Card hoverable>
      <div className="flex items-center mb-4">
        <HelpCircle className="h-5 w-5 text-viapurple-600 mr-2" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-viapurple-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {item}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default HelpCenterPage;