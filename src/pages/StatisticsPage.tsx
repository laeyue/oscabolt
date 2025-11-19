import { Users, CheckCircle, Clock } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../contexts/LanguageContext';
import { mockStats } from '../data/mockStats';

export function StatisticsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-700 mb-2">
            {t('stats.title')}
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatCard
            title={t('stats.total')}
            value={mockStats.totalSeniors}
            icon={Users}
          />
          <StatCard
            title={t('stats.active')}
            value={mockStats.activePensioners}
            icon={CheckCircle}
          />
          <StatCard
            title={t('stats.pending')}
            value={mockStats.pendingApplications}
            icon={Clock}
          />
        </div>
      </div>
    </div>
  );
}
