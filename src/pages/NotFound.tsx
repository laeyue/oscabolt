import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <Link to="/">
          <Button size="lg">
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
