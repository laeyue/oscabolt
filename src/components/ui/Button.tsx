import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-2xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary:
        'bg-brand-blue text-white hover:bg-blue-600 focus:ring-brand-blue shadow-glow hover:shadow-lg',
      secondary:
        'bg-white text-brand-dark border border-slate-200 hover:text-brand-blue hover:border-brand-blue/40 focus:ring-slate-200',
      outline:
        'border border-slate-300 text-slate-700 hover:border-brand-blue hover:text-brand-blue focus:ring-brand-blue/20 bg-white',
    };

    const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-5 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
