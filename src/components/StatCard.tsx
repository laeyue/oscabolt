import { Card, CardContent } from './ui/Card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
}

export function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-teal-700 mt-2">
              {value.toLocaleString()}
            </p>
          </div>
          <div className="bg-teal-100 p-3 rounded-full">
            <Icon className="w-8 h-8 text-teal-700" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
