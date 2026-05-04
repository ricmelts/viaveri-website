import React from 'react';
import Container from '../components/ui/Container';

const UseCasePage: React.FC = () => {
  return (
    <div className="py-20 min-h-screen bg-white">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Use Cases</h1>
        <div className="prose max-w-none">
          {/* Content will be added in next iteration */}
          <p>Use cases content coming soon...</p>
        </div>
      </Container>
    </div>
  );
};

export default UseCasePage;