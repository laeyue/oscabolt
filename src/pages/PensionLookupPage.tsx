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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-teal-700 mb-2">
              {t('lookup.title')}
            </h1>
            <p className="text-gray-600">{t('lookup.subtitle')}</p>
          </div>

          <Card>
            <CardHeader>
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <label
                    htmlFor="oscaId"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="block text-sm font-medium text-gray-700 mb-2"
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

                <Button type="submit" className="w-full" size="lg">
                  <Search className="w-5 h-5 mr-2" />
                  {t('lookup.search')}
                </Button>
              </form>
            </CardHeader>

            {error && (
              <CardContent>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800">{error}</p>
                </div>
              </CardContent>
            )}

            {result && (
              <CardContent>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-green-800">
                      {t('lookup.name')}: {result.firstName} {result.lastName}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {t('lookup.barangay')}
                      </p>
                      <p className="text-lg text-gray-800">{result.barangay}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {t('lookup.type')}
                      </p>
                      <p className="text-lg text-gray-800">
                        {t(`type.${result.pensionType.toLowerCase()}`)}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {t('lookup.amount')}
                      </p>
                      <p className="text-lg font-bold text-teal-700">
                        ₱{result.monthlyAmount.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {t('lookup.status')}
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          result.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {t(`status.${result.status === 'active' ? 'active' : 'review'}`)}
                      </span>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-gray-600">
                        {t('lookup.payout')}
                      </p>
                      <p className="text-lg text-gray-800">
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

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>
                {language === 'en' ? 'Note:' : 'Nota:'}
              </strong>{' '}
              {language === 'en'
                ? 'For assistance or to report discrepancies, please visit the OSCA office at the City Hall or call our hotline.'
                : 'Para sa tabang o pagreport sa mga sayop, palihug bisitaha ang opisina sa OSCA sa City Hall o tawagan ang among hotline.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

