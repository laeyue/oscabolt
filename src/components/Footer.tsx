import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useFontScale } from '../contexts/FontScaleContext';

const footerCopy = {
  en: {
    tagline: 'Office for Senior Citizens Affairs \u00B7 Iligan City',
    description:
      'Coordinating pensions, welfare programs, and community partners for more than 8,000 senior citizens.',
    columns: [
      {
        title: 'Services',
        links: [
          { label: 'Pension lookup', to: '/pension-lookup' },
          { label: 'Validation schedule', to: '/#contact' },
          { label: 'Field outreach', to: '/#contact' },
          { label: 'Senior ID assistance', to: '/' },
        ],
      },
      {
        title: 'Programs',
        links: [
          { label: 'Health & wellness', to: '/#contact' },
          { label: 'Livelihood partners', to: '/#contact' },
          { label: 'Volunteer network', to: '/#contact' },
          { label: 'Barangay drives', to: '/statistics' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Quick guides', to: '/statistics' },
          { label: 'Downloadable forms', to: '/#contact' },
          { label: 'FAQs', to: '/pension-lookup' },
          { label: 'Privacy policy', to: '/' },
        ],
      },
      {
        title: 'About OSCA',
        links: [
          { label: 'City Hall office', to: '/#contact' },
          { label: 'Meet the team', to: '/' },
          { label: 'Contact OSCA', to: '/#contact' },
          { label: 'Community stories', to: '/' },
        ],
      },
    ],
    fontLabel: 'Font size',
    languageButton: 'Switch to Cebuano',
  },
  ceb: {
    tagline: 'Opisina para sa mga Senior Citizens \u00B7 Dakbayan sa Iligan',
    description:
      'Nag-uban sa mga pensyon, kaayohan, ug komunidad para sa kapin sa 8,000 ka senior citizen.',
    columns: [
      {
        title: 'Mga Serbisyo',
        links: [
          { label: 'Tan-awa ang pension', to: '/pension-lookup' },
          { label: 'Eskedyul sa validation', to: '/#contact' },
          { label: 'Field outreach', to: '/#contact' },
          { label: 'Tabang sa senior ID', to: '/' },
        ],
      },
      {
        title: 'Mga Programa',
        links: [
          { label: 'Kahimsog ug wellness', to: '/#contact' },
          { label: 'Mga kaabag sa panginabuhian', to: '/#contact' },
          { label: 'Volunteer network', to: '/#contact' },
          { label: 'Barangay drives', to: '/statistics' },
        ],
      },
      {
        title: 'Mga Resurso',
        links: [
          { label: 'Mga giya', to: '/statistics' },
          { label: 'Mga porma', to: '/#contact' },
          { label: 'FAQ', to: '/pension-lookup' },
          { label: 'Palisiya sa privacy', to: '/' },
        ],
      },
      {
        title: 'Mahitungod sa OSCA',
        links: [
          { label: 'Opisina sa City Hall', to: '/#contact' },
          { label: 'Ilaila ang team', to: '/' },
          { label: 'Kontaka ang OSCA', to: '/#contact' },
          { label: 'Mga istorya sa komunidad', to: '/' },
        ],
      },
    ],
    fontLabel: 'Kadak-on sa letra',
    languageButton: 'Balhin sa English',
  },
} as const;

export function Footer() {
  const { language, toggleLanguage } = useLanguage();
  const { fontScale, setFontScale } = useFontScale();
  const year = new Date().getFullYear();
  const copy = footerCopy[language];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,repeat(4,minmax(0,1fr))]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white font-semibold">
                O
              </div>
              <div>
                <p className="text-lg font-semibold text-white">OSCA Iligan</p>
                <p className="text-sm text-slate-400">{copy.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">{copy.description}</p>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <p>osca@iligan.gov.ph</p>
              <p>(063) 221 3841</p>
            </div>
          </div>

          {copy.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {column.title}
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {year} OSCA Iligan. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <label className="inline-flex items-center gap-2">
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  {copy.fontLabel}
                </span>
                <select
                  value={fontScale}
                  onChange={(event) => setFontScale(event.target.value as 'small' | 'medium' | 'large')}
                  className="rounded-2xl border border-white/10 bg-slate-900 px-3 py-1.5 text-sm text-white focus:border-white/30 focus:outline-none"
                >
                  <option value="small">A</option>
                  <option value="medium">A+</option>
                  <option value="large">A++</option>
                </select>
              </label>
              <button
                type="button"
                onClick={toggleLanguage}
                className="rounded-2xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {copy.languageButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

