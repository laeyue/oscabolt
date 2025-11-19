/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB',
        'brand-indigo': '#4338CA',
        'brand-dark': '#0F172A',
        'brand-muted': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      boxShadow: {
        floating: '0 30px 60px rgba(15, 23, 42, 0.08)',
        glow: '0 35px 65px rgba(37, 99, 235, 0.35)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
