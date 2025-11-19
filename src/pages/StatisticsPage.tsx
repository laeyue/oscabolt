import { Users, CheckCircle, Clock } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { useLanguage } from '../contexts/LanguageContext';
import { mockStats } from '../data/mockStats';

const highlights = [
  {
    titleKey: 'stats.total',
    description:
      'Registered seniors who benefit from OSCA programs, outreach, and partners.',
    icon: Users,
    valueKey: 'totalSeniors',
  },
  {
    titleKey: 'stats.active',
    description: 'Validated pensioners receiving regular payouts.',
    icon: CheckCircle,
    valueKey: 'activePensioners',
  },
  {
    titleKey: 'stats.pending',
    description: 'Applications awaiting barangay validation or documentary review.',
    icon: Clock,
    valueKey: 'pendingApplications',
  },
];

export function StatisticsPage() {
  const { t, language } = useLanguage();

  const localizedHighlights = highlights.map((item) => ({
    ...item,
    description:
      language === 'en'
        ? item.description
        : item.description === highlights[0].description
          ? 'Mga rehistradong senior nga nakadawat sa mga programa ug kaabag sa OSCA.'
          : item.description === highlights[1].description
            ? 'Mga na-validate nga pensyonado nga regular nakadawat sa ilang mga payout.'
            : 'Mga aplikasyon nga naghulat sa barangay validation o dokumentaryong review.',
  }));

  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
            OSCA Iligan
          </p>
          <h1 className="text-4xl font-bold text-brand-dark">{t('stats.title')}</h1>
          <p className="text-base text-slate-600">
            {language === 'en'
              ? 'Data refreshed weekly from OSCA validation logs, volunteer outreach, and barangay partnerships.'
              : 'Gina-update matag semana gikan sa OSCA logs, volunteer outreach, ug mga kaabag sa barangay.'}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {localizedHighlights.map((item) => (
            <div key={item.titleKey}>
              <StatCard
                title={t(item.titleKey)}
                value={mockStats[item.valueKey as keyof typeof mockStats]}
                icon={item.icon}
              />
              <p className="mt-3 text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-[2.5rem] border border-slate-100 bg-white/80 p-8 shadow-floating backdrop-blur md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
              {language === 'en' ? 'Barangay coverage' : 'Sakop sa barangay'}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-brand-dark">
              {language === 'en'
                ? 'Every barangay receives validation twice per year'
                : 'Kada barangay gaduha ka beses nga adunay validation matag tuig'}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {language === 'en'
                ? 'Priority schedules rotate weekly. Contact OSCA to request outreach for bedridden senior citizens.'
                : 'Nag-rotate matag semana ang iskedyul. Kontaka ang OSCA para mangayo og outreach alang sa mga senior nga dili makabiyahe.'}
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-3xl border border-slate-100 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {language === 'en' ? 'Top barangays validated this week' : 'Pinakadaghan nga barangay nga na-validate karong semana'}
              </p>
              <p className="mt-2 font-semibold text-brand-dark">Tibanga · Pala-o · Hinaplanon · Poblacion</p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {language === 'en' ? 'Next outreach' : 'Sunod nga outreach'}
              </p>
              <p className="mt-2 font-semibold text-brand-dark">
                {language === 'en'
                  ? 'November 28 · Barangay Suarez Covered Court'
                  : 'Nobyembre 28 · Barangay Suarez Covered Court'}
              </p>
              <p>
                {language === 'en'
                  ? 'Processing IDs, replacement slips, and medical assistance referrals.'
                  : 'Pagproseso sa ID, replacement slips, ug medical assistance referrals.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
