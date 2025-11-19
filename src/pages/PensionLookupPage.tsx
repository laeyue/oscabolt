import { useState, FormEvent } from 'react';
import { Search, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPensioners, PensionerRecord } from '../data/mockPensioners';

export function PensionLookupPage() {
  const { t, language } = useLanguage();
  const [oscaId, setOscaId] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState<PensionerRecord | null>(null);
  const [error, setError] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const found = mockPensioners.find(
      (p) => p.id === oscaId && p.birthdate === birthdate
    );

    if (found) {
      setResult(found);
    } else {
      setError(t('lookup.notfound'));
    }
  };

  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 lg:flex-row">
        <section className="space-y-6 lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
            {t('hero.title')}
          </p>
          <div>
            <h1 className="text-4xl font-bold text-brand-dark">{t('lookup.title')}</h1>
            <p className="mt-3 text-base text-slate-600">{t('lookup.subtitle')}</p>
          </div>
          <Card className="p-0">
            <CardHeader>
              <form onSubmit={handleSearch} className="space-y-5">
                <div>
                  <label
                    htmlFor="oscaId"
                    className="mb-2 block text-sm font-medium text-slate-600"
                  >
                    {t('lookup.osca')}
                  </label>
                  <Input
                    id="oscaId"
                    type="text"
                    value={oscaId}
                    onChange={(e) => setOscaId(e.target.value)}
                    placeholder="OSCA-2024-001"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="birthdate"
                    className="mb-2 block text-sm font-medium text-slate-600"
                  >
                    {t('lookup.birthdate')}
                  </label>
                  <Input
                    id="birthdate"
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full text-base" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  {t('lookup.search')}
                </Button>
              </form>
            </CardHeader>

            {error && (
              <CardContent>
                <div className="flex items-start rounded-2xl border border-red-200 bg-red-50/80 p-4">
                  <AlertCircle className="mr-3 h-5 w-5 text-red-600" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </CardContent>
            )}

            {result && (
              <CardContent>
                <div className="rounded-3xl border border-green-200 bg-green-50/80 p-6">
                  <div className="mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-800">
                      {t('lookup.name')}: {result.firstName} {result.lastName}
                    </h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {t('lookup.barangay')}
                      </p>
                      <p className="text-lg font-medium text-slate-900">{result.barangay}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {t('lookup.type')}
                      </p>
                      <p className="text-lg font-medium text-slate-900">
                        {t(`type.${result.pensionType.toLowerCase()}`)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {t('lookup.amount')}
                      </p>
                      <p className="text-xl font-semibold text-brand-dark">
                        ₱{result.monthlyAmount.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {t('lookup.status')}
                      </p>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                          result.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {t(`status.${result.status === 'active' ? 'active' : 'needs-review'}`)}
                      </span>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {t('lookup.payout')}
                      </p>
                      <p className="text-lg font-medium text-slate-900">
                        {new Date(result.nextPayout).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </section>

        <aside className="rounded-4xl border border-slate-100 bg-white/80 p-8 shadow-floating backdrop-blur lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
            {language === 'en' ? 'Need help?' : 'Nanginahanglan tabang?'}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-brand-dark">
            {language === 'en' ? 'How the lookup works' : 'Giunsa ang pag-lookup'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {language === 'en'
              ? 'Bring your official OSCA ID. Payout information updates within 24 hours of validation.'
              : 'Dad-a ang imong opisyal nga OSCA ID. Ang impormasyon sa payout ma-update sulod sa 24 ka oras human sa validation.'}
          </p>

          <ul className="mt-6 space-y-4 text-sm text-slate-600">
            <li className="rounded-2xl border border-slate-100 bg-white/70 p-4">
              <strong className="text-brand-dark">
                {language === 'en' ? 'ID verification' : 'Pagpamatood sa ID'}
              </strong>
              <p>
                {language === 'en'
                  ? 'Ensure the ID matches the registered birthdate. Mismatched IDs are flagged for manual review.'
                  : 'Siguroha nga nagtugma ang ID sa narehistrong petsa sa pagkatawo. Ang dili pagtugma ipadala sa manual nga review.'}
              </p>
            </li>
            <li className="rounded-2xl border border-slate-100 bg-white/70 p-4">
              <strong className="text-brand-dark">
                {language === 'en' ? 'Validation drives' : 'Mga validation drive'}
              </strong>
              <p>
                {language === 'en'
                  ? 'Barangay outreach schedules are posted weekly. Contact OSCA for homebound validation.'
                  : 'Ang iskedyul sa barangay outreach ipahibalo matag semana. Kontaka ang OSCA para sa balay-balay nga validation.'}
              </p>
            </li>
            <li className="rounded-2xl border border-slate-100 bg-white/70 p-4">
              <strong className="text-brand-dark">
                {language === 'en' ? 'Discrepancies' : 'Mga kakulian'}
              </strong>
              <p>
                {language === 'en'
                  ? 'Report payout issues at the OSCA desk or via hotline. Bring recent validation slips.'
                  : 'I-report ang mga isyu sa payout sa OSCA desk o hotline. Dad-a ang pinakabag-ong validation slip.'}
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}

