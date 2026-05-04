import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
}) => {
  return (
    <div
      className={`bg-white border border-stone-200 rounded-lg p-6 ${
        hoverable ? 'hover:shadow-md transition-shadow' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
