import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Users, Building2, GraduationCap, Rocket, ArrowRight, Calendar, MapPin } from 'lucide-react';

const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Growing <span className="text-viapurple-600">Community</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're proud to be part of the Burgess Start-up Accelerator at Michigan State University,
              fostering innovation and collaboration in educational technology.
            </p>
            <Button size="lg" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right">
              Get Involved
            </Button>
          </div>
        </Container>
      </section>

      {/* Accelerator Program Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Burgess Start-up Accelerator
              </h2>
              <p className="text-gray-600 mb-6">
                As a member of the prestigious Burgess Start-up Accelerator at Michigan State University,
                we're committed to pushing the boundaries of educational technology and creating meaningful
                impact in the learning community.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-viapurple-100 p-2 rounded-lg mr-4">
                    <Rocket className="h-5 w-5 text-viapurple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Innovation Focus</h3>
                    <p className="text-gray-600">Developing cutting-edge solutions for modern education</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-viapurple-100 p-2 rounded-lg mr-4">
                    <Building2 className="h-5 w-5 text-viapurple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">University Backing</h3>
                    <p className="text-gray-600">Support from MSU's world-class resources and mentors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-viapurple-100 p-2 rounded-lg mr-4">
                    <Users className="h-5 w-5 text-viapurple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Network Access</h3>
                    <p className="text-gray-600">Connect with industry leaders and fellow innovators</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-viapurple-400 to-accent-400 rounded-2xl blur-md opacity-70"></div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Startup team collaboration"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Events Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Community Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for exciting events where you can learn, network, and grow with fellow education enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="EdTech Innovation Workshop"
              date="March 15, 2025"
              location="MSU Innovation Center"
              description="Learn about the latest trends in educational technology and how to implement them effectively."
              type="Workshop"
            />
            <EventCard
              title="Community Meetup"
              date="March 22, 2025"
              location="Virtual Event"
              description="Connect with other members of the ViaVeri community and share your experiences."
              type="Networking"
            />
            <EventCard
              title="Student Success Symposium"
              date="April 5, 2025"
              location="MSU Business Complex"
              description="Join educators and technologists in discussing the future of student success."
              type="Conference"
            />
          </div>
        </Container>
      </section>

      {/* Get Involved Section */}
      <section className="py-16">
        <Container>
          <div className="bg-viapurple-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-6 text-viapurple-300" />
              <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-viapurple-100 mb-8">
                Join our community of educators, innovators, and learners who are shaping the future of education.
                Whether you're a student, educator, or industry professional, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Join Our Community
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, description, type }) => {
  return (
    <Card hoverable>
      <div className="mb-4">
        <span className="inline-block bg-viapurple-100 text-viapurple-700 text-sm px-2.5 py-0.5 rounded-full">
          {type}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" fullWidth>
        Register Now
      </Button>
    </Card>
  );
};

export default CommunityPage;