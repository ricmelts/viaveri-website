import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </Component>
  );
};

export default Container;
