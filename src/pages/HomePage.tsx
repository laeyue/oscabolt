import { Link } from 'react-router-dom';
import { Search, BarChart3, FileText } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';

export function HomePage() {
  const { t, language } = useLanguage();

  const quickLinks = [
    {
      title: t('quick.lookup'),
      icon: Search,
      link: '/pension-lookup',
      color: 'bg-teal-700',
    },
    {
      title: t('quick.statistics'),
      icon: BarChart3,
      link: '/statistics',
      color: 'bg-blue-700',
    },
    {
      title: t('quick.services'),
      icon: FileText,
      link: '/',
      color: 'bg-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-teal-700 mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-2">{t('hero.subtitle')}</p>
          <p className="text-lg text-gray-500">{t('hero.description')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.link} to={link.link}>
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {link.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'en' ? 'About OSCA Iligan' : 'Bahin sa OSCA Iligan'}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {language === 'en'
              ? 'The Office for Senior Citizens Affairs provides comprehensive support and services to our senior citizens. Access pension information, apply for benefits, and stay informed about programs designed to enhance the quality of life for our elderly community members.'
              : 'Ang Opisina para sa mga Senior Citizens naghatag og komprehensibo nga suporta ug serbisyo sa atong mga tigulang. Pag-access sa impormasyon bahin sa pension, pag-apply alang sa mga benepisyo, ug pagpabilin nga informed bahin sa mga programa nga gidesinyo aron mapaayo ang kalidad sa kinabuhi sa atong mga tigulang.'}
          </p>
        </div>
      </div>
    </div>
  );
}

