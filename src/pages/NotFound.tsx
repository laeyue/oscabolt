import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-lg rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 text-center shadow-floating backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">OSCA Iligan</p>
        <h1 className="mt-4 text-6xl font-bold text-brand-dark">404</h1>
        <p className="mt-3 text-lg text-slate-600">
          This page is no longer available. Return to the OSCA dashboard to continue supporting our senior community.
        </p>
        <Link to="/" className="mt-8 inline-flex justify-center">
          <Button size="lg" className="px-8">
            <Home className="mr-2 h-5 w-5" />
            Back to home
          </Button>
        </Link>
      </div>
    </main>
  );
}
