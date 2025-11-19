import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ceb';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.lookup': 'Check Pension',
    'nav.statistics': 'Statistics',
    'hero.title': 'OSCA Iligan City',
    'hero.subtitle': 'Office for Senior Citizens Affairs',
    'hero.description': 'Access your pension information and senior citizen services',
    'quick.lookup': 'Check Pension Status',
    'quick.statistics': 'View Statistics',
    'quick.services': 'Senior Services',
    'lookup.title': 'Pension Status Lookup',
    'lookup.subtitle': 'Enter your information to check your pension status',
    'lookup.osca': 'OSCA ID',
    'lookup.birthdate': 'Birthdate',
    'lookup.search': 'Search',
    'lookup.notfound': 'No pension record found. Please verify your OSCA ID and birthdate.',
    'lookup.name': 'Name',
    'lookup.barangay': 'Barangay',
    'lookup.type': 'Pension Type',
    'lookup.amount': 'Monthly Amount',
    'lookup.status': 'Status',
    'lookup.payout': 'Next Payout',
    'status.active': 'Active',
    'status.review': 'Needs Review',
    'type.local': 'Local',
    'type.national': 'National',
    'stats.title': 'Senior Citizen Statistics',
    'stats.total': 'Total Senior Citizens',
    'stats.active': 'Active Pensioners',
    'stats.pending': 'Pending Applications',
    'font.label': 'Font Size',
    'lang.label': 'Language',
  },
  ceb: {
    'nav.home': 'Balay',
    'nav.lookup': 'Tan-awa ang Pension',
    'nav.statistics': 'Estadistika',
    'hero.title': 'OSCA Iligan City',
    'hero.subtitle': 'Opisina para sa mga Senior Citizens',
    'hero.description': 'Pag-access sa imong pension ug mga serbisyo para sa senior citizen',
    'quick.lookup': 'Tan-awa ang Pension',
    'quick.statistics': 'Estadistika',
    'quick.services': 'Mga Serbisyo',
    'lookup.title': 'Pagpangita sa Pension',
    'lookup.subtitle': 'I-type ang imong impormasyon aron tan-awon ang pension',
    'lookup.osca': 'OSCA ID',
    'lookup.birthdate': 'Petsa sa Pagkatawo',
    'lookup.search': 'Pangita',
    'lookup.notfound': 'Walay nakitang rekord. Palihug susihon ang OSCA ID ug petsa sa pagkatawo.',
    'lookup.name': 'Ngalan',
    'lookup.barangay': 'Barangay',
    'lookup.type': 'Matang sa Pension',
    'lookup.amount': 'Binuwan nga Kantidad',
    'lookup.status': 'Kahimtang',
    'lookup.payout': 'Sunod nga Bayad',
    'status.active': 'Aktibo',
    'status.review': 'Kinahanglan Susihon',
    'type.local': 'Lokal',
    'type.national': 'Nasudnon',
    'stats.title': 'Estadistika sa Senior Citizen',
    'stats.total': 'Tibuok nga Senior Citizens',
    'stats.active': 'Aktibong Pensyonado',
    'stats.pending': 'Naghulat nga Aplikasyon',
    'font.label': 'Gidak-on sa Letra',
    'lang.label': 'Pinulongan',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ceb' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
