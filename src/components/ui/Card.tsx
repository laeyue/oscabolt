import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => {
    return <div ref={ref} className={`p-6 ${className}`} {...props} />;
  }
);

CardHeader.displayName = 'CardHeader';

export const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => {
    return <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />;
  }
);

CardContent.displayName = 'CardContent';
