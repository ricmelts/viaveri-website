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
      className={`bg-white rounded-xl shadow-sm p-6 ${
        hoverable ? 'transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;