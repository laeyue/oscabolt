import { Card, CardContent } from './ui/Card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
}

export function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <Card className="border-slate-100 bg-white/90 transition hover:-translate-y-0.5 hover:shadow-glow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {title}
            </p>
            <p className="mt-2 text-3xl font-bold text-brand-dark">
              {value.toLocaleString()}
            </p>
          </div>
          <div className="rounded-2xl bg-brand-blue/10 p-3 text-brand-blue">
            <Icon className="h-8 w-8" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
