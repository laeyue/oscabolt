import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useFontScale } from '../contexts/FontScaleContext';

const copyMap = {
  en: {
    brandName: 'OSCA Iligan',
    brandTagline: 'Office for Senior Citizens Affairs',
    nav: {
      home: 'Home',
      lookup: 'Pension Lookup',
      stats: 'Statistics',
    },
    login: 'Portal Login',
    cta: 'Get support',
    fontLabel: 'Font size',
    langLabel: 'Switch language',
  },
  ceb: {
    brandName: 'OSCA Iligan',
    brandTagline: 'Opisina para sa mga Senior Citizens',
    nav: {
      home: 'Balay',
      lookup: 'Tan-awa ang Pension',
      stats: 'Estadistika',
    },
    login: 'Sulod sa Portal',
    cta: 'Kuhaa ang tabang',
    fontLabel: 'Kadak-on sa letra',
    langLabel: 'Ibalhin ang pinulongan',
  },
} as const;

export function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { fontScale, setFontScale } = useFontScale();
  const copy = copyMap[language];
  const navLinks = [
    { label: copy.nav.home, to: '/' },
    { label: copy.nav.lookup, to: '/pension-lookup' },
    { label: copy.nav.stats, to: '/statistics' },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-indigo text-white font-semibold">
            O
          </div>
          <div>
            <p className="text-base font-semibold text-brand-dark">{copy.brandName}</p>
            <p className="text-xs text-brand-muted">{copy.brandTagline}</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="transition-colors hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 px-3 py-1.5 text-xs text-slate-600 md:flex">
            <span className="font-semibold text-slate-500">{copy.fontLabel}</span>
            <select
              value={fontScale}
              onChange={(e) => setFontScale(e.target.value as 'small' | 'medium' | 'large')}
              aria-label={copy.fontLabel}
              className="rounded-xl border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 focus:border-brand-blue/50 focus:outline-none"
            >
              <option value="small">A</option>
              <option value="medium">A+</option>
              <option value="large">A++</option>
            </select>
          </div>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={copy.langLabel}
            className="hidden items-center rounded-2xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue md:inline-flex"
          >
            {language === 'en' ? 'CEB' : 'EN'}
          </button>
          <button
            type="button"
            className="hidden text-sm font-semibold text-slate-600 hover:text-brand-dark sm:inline-flex"
          >
            {copy.login}
          </button>
          <Link
            to="/pension-lookup"
            className="inline-flex items-center rounded-2xl bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-600"
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
