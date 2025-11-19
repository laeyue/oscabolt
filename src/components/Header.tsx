import { Link } from 'react-router-dom';
import { Home, Search, BarChart3, Type, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useFontScale } from '../contexts/FontScaleContext';
import { Button } from './ui/Button';

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { fontScale, setFontScale } = useFontScale();

  return (
    <header className="bg-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <Home className="w-6 h-6 text-teal-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{t('hero.title')}</h1>
              <p className="text-xs text-teal-100">{t('hero.subtitle')}</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-teal-100 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>{t('nav.home')}</span>
            </Link>
            <Link
              to="/pension-lookup"
              className="flex items-center space-x-2 hover:text-teal-100 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>{t('nav.lookup')}</span>
            </Link>
            <Link
              to="/statistics"
              className="flex items-center space-x-2 hover:text-teal-100 transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              <span>{t('nav.statistics')}</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Type className="w-4 h-4" />
              <select
                value={fontScale}
                onChange={(e) => setFontScale(e.target.value as 'small' | 'medium' | 'large')}
                className="bg-teal-600 text-white rounded px-2 py-1 text-sm border border-teal-500 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label={t('font.label')}
              >
                <option value="small">A</option>
                <option value="medium">A+</option>
                <option value="large">A++</option>
              </select>
            </div>

            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="bg-transparent border-white text-white hover:bg-teal-600"
              aria-label={t('lang.label')}
            >
              <Languages className="w-4 h-4 mr-1" />
              {language === 'en' ? 'CEB' : 'EN'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
