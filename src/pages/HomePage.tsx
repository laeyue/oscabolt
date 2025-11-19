import {
  Mail,
  Phone,
  Clock,
  MapPin,
  HelpCircle,
  Headset,
  Briefcase,
  ArrowRight,
  Search,
  BarChart3,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { mockStats } from '../data/mockStats';

const totalSeniors = mockStats.totalSeniors.toLocaleString();

const homeCopy = {
  en: {
    heroTag: 'OSCA Iligan City',
    heroTitle: 'Support for every senior citizen',
    heroBody:
      'Need assistance with pensions or benefits? OSCA Iligan provides dedicated services to keep every senior informed, validated, and supported.',
    mission:
      'From pension validation to welfare programs, our office safeguards timely payouts and connects senior citizens with community partners.',
    quickActions: [
      {
        icon: Search,
        title: 'Check pension status',
        copy: 'Use your OSCA ID and birthdate to confirm payouts and validations.',
        cta: 'Check now',
        link: '/pension-lookup',
      },
      {
        icon: BarChart3,
        title: 'View statistics',
        copy: 'See the latest counts of active pensioners and pending applications.',
        cta: 'See insights',
        link: '/statistics',
      },
      {
        icon: FileText,
        title: 'Access services',
        copy: 'Download assistance forms and explore senior programs.',
        cta: 'Contact OSCA',
        link: '/#contact',
      },
    ],
    highlight: {
      prefix: 'Serving over',
      emphasis: totalSeniors,
      suffix: 'registered senior citizens across Iligan City.',
      link: 'View detailed statistics',
      href: '/statistics',
    },
    contactDetails: [
      {
        icon: Mail,
        label: 'Email OSCA',
        value: 'osca@iligan.gov.ph',
        helper: 'We reply within 1 business day',
      },
      {
        icon: Phone,
        label: 'Hotline',
        value: '(063) 221 3841',
        helper: 'Mon to Fri · 8 AM – 5 PM',
      },
      {
        icon: Clock,
        label: 'Walk-in hours',
        value: '8:00 AM – 5:00 PM',
        helper: 'City Hall, Ground Floor',
      },
      {
        icon: MapPin,
        label: 'Visit us',
        value: 'OSCA Office, Iligan City Hall',
        helper: 'Quezon Ave., Poblacion',
      },
    ],
    form: {
      tag: "Let's talk",
      title: 'Send us a message',
      subtitle: 'We usually respond in less than 2 business hours.',
      fields: {
        firstName: { label: 'First name', placeholder: 'First name' },
        lastName: { label: 'Last name', placeholder: 'Last name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        phone: { label: 'Phone number', placeholder: '+63 900 000 0000' },
        message: { label: 'Message', placeholder: 'How can we help?' },
      },
      button: 'Send message',
      note: "By submitting this form, you agree to OSCA Iligan's privacy practices.",
    },
    location: {
      tag: 'Our location',
      title: 'Find our headquarters',
      body: 'Visit our Iligan City Hall office or connect with us online for field validation requests.',
      address: 'Iligan City Hall \u00B7 Quezon Ave., Poblacion',
    },
    support: {
      tag: 'Contact',
      title: "We're here to help",
      body: 'Explore more options for assistance—from walk-in validation to benefits advisory and partner services.',
      cards: [
        {
          icon: HelpCircle,
          title: 'Help center',
          copy: 'Browse pension FAQs, downloadable forms, and senior benefits guides.',
          action: 'Visit knowledge base',
        },
        {
          icon: Headset,
          title: 'Field validation',
          copy: 'Schedule onsite validation for homebound senior citizens or barangay drives.',
          action: 'Request outreach',
        },
        {
          icon: Briefcase,
          title: 'Benefits advisory',
          copy: 'Coordinate with OSCA staff about medical, livelihood, and partner programs.',
          action: 'Talk to OSCA',
        },
      ],
    },
    cta: {
      tag: 'For senior advocates',
      title: 'Bring compassionate support to every barangay',
      body: 'Partner with OSCA to streamline payouts, volunteer for validation, or sponsor wellness activities.',
      primary: 'Get assistance',
      secondary: 'Contact OSCA',
    },
  },
  ceb: {
    heroTag: 'OSCA Iligan City',
    heroTitle: 'Suporta alang sa matag senior citizen',
    heroBody:
      'Nanginahanglan ka ba ug tabang sa pension o benepisyo? Naghatag ang OSCA Iligan og dedikadong serbisyo aron mahibalo ug masuportahan ang matag katigulangan.',
    mission:
      'Gikan sa pension validation hangtod sa mga programa sa kaayohan, among ginapadayon ang husto ug tukmang pagpagawas sa mga benepisyo.',
    quickActions: [
      {
        icon: Search,
        title: 'Susihi ang pension',
        copy: 'Gamita ang imong OSCA ID ug petsa sa pagkatawo aron masuta ang payout.',
        cta: 'Tan-awa karon',
        link: '/pension-lookup',
      },
      {
        icon: BarChart3,
        title: 'Tan-awa ang estadistika',
        copy: 'Kitaa ang pinakabag-ong ihap sa aktibong pensyonado ug pending nga aplikasyon.',
        cta: 'Tan-awa ang datos',
        link: '/statistics',
      },
      {
        icon: FileText,
        title: 'Mga serbisyo ug porma',
        copy: 'I-download ang mga porma ug hibalo sa mga programa sa senior.',
        cta: 'Kontaka ang OSCA',
        link: '/#contact',
      },
    ],
    highlight: {
      prefix: 'Nagaservisyo sa kapin',
      emphasis: totalSeniors,
      suffix: 'ka rehistradong senior sa dakbayan sa Iligan.',
      link: 'Tan-awa ang estadistika',
      href: '/statistics',
    },
    contactDetails: [
      {
        icon: Mail,
        label: 'I-email ang OSCA',
        value: 'osca@iligan.gov.ph',
        helper: 'Motubag mi sulod sa usa ka adlaw',
      },
      {
        icon: Phone,
        label: 'Hotline',
        value: '(063) 221 3841',
        helper: 'Lunes-Biyernes · 8 AM – 5 PM',
      },
      {
        icon: Clock,
        label: 'Oras sa walk-in',
        value: '8:00 AM – 5:00 PM',
        helper: 'City Hall, Ground Floor',
      },
      {
        icon: MapPin,
        label: 'Bisitaha kami',
        value: 'Opisina sa OSCA, Iligan City Hall',
        helper: 'Quezon Ave., Poblacion',
      },
    ],
    form: {
      tag: 'Magstorya ta',
      title: 'Isumite ang imong mensahe',
      subtitle: 'Kasagaran mutubag mi sulod sa 2 ka oras sa trabaho.',
      fields: {
        firstName: { label: 'Unang ngalan', placeholder: 'Unang ngalan' },
        lastName: { label: 'Apelyido', placeholder: 'Apelyido' },
        email: { label: 'Email', placeholder: 'ikaw@example.com' },
        phone: { label: 'Numero sa telepono', placeholder: '+63 900 000 0000' },
        message: { label: 'Mensahe', placeholder: 'Unsaon namo pagtabang?' },
      },
      button: 'Ipadala ang mensahe',
      note: 'Sa pag-submit, mosugot ka sa among palisiya sa pagpanalipod sa datos.',
    },
    location: {
      tag: 'Among lokasyon',
      title: 'Pangitaa ang among punuan',
      body: 'Bisitaha kami sa Iligan City Hall o konekta online para sa field validation.',
      address: 'Iligan City Hall \u00B7 Quezon Ave., Poblacion',
    },
    support: {
      tag: 'Kontaka',
      title: 'Andam mi motabang',
      body: 'Susiha ang lain-laing kapilian sa tabang—walk-in validation, benefits advisory, ug mga programa.',
      cards: [
        {
          icon: HelpCircle,
          title: 'Sentro sa tabang',
          copy: 'Talagsaong FAQ, porma, ug giya para sa mga senior.',
          action: 'Bisitaha ang giya',
        },
        {
          icon: Headset,
          title: 'Field validation',
          copy: 'Iskedyul og barangay o balay-balay nga pag-validate.',
          action: 'Paghangyo og outreach',
        },
        {
          icon: Briefcase,
          title: 'Adbays sa benepisyo',
          copy: 'Makig-uban sa OSCA staff para sa medikal ug livelihood nga programa.',
          action: 'Makigstorya sa OSCA',
        },
      ],
    },
    cta: {
      tag: 'Alang sa mga magtatabang',
      title: 'Dala ang mahigalaong serbisyo sa matag barangay',
      body: 'Makigpartner sa OSCA aron mapasayon ang payouts ug mga kalihokan para sa mga senior.',
      primary: 'Kuhaa ang tabang',
      secondary: 'Kontaka ang OSCA',
    },
  },
} as const;

export function HomePage() {
  const { language } = useLanguage();
  const copy = homeCopy[language];

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {copy.heroTag}
                </p>
                <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
                  {copy.heroTitle}
                </h1>
                <p className="max-w-xl text-lg text-slate-600">{copy.heroBody}</p>
                <p className="max-w-2xl text-sm text-slate-500">{copy.mission}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {copy.quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Card
                      key={action.title}
                      className="rounded-3xl border border-slate-100/80 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                    >
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-brand-dark">{action.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{action.copy}</p>
                      <Link
                        to={action.link}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
                      >
                        {action.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Card>
                  );
                })}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {copy.contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm backdrop-blur"
                    >
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                        {detail.label}
                      </p>
                      <p className="text-lg font-semibold text-brand-dark">{detail.value}</p>
                      <p className="text-sm text-slate-500">{detail.helper}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-slate-100 bg-white/60 p-6 text-sm text-slate-500 shadow-sm backdrop-blur">
                <p>
                  {copy.highlight.prefix}{' '}
                  <span className="font-semibold text-brand-dark">{copy.highlight.emphasis}</span>{' '}
                  {copy.highlight.suffix}
                </p>
                <Link
                  to={copy.highlight.href}
                  className="inline-flex items-center gap-2 text-brand-blue hover:underline"
                >
                  {copy.highlight.link}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <Card className="p-0 shadow-glow lg:translate-y-4">
              <div className="p-8 sm:p-10">
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    {copy.form.tag}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-brand-dark">{copy.form.title}</h2>
                  <p className="text-sm text-slate-500">{copy.form.subtitle}</p>
                </div>

                <form className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-600">
                        {copy.form.fields.firstName.label}
                      </label>
                      <Input placeholder={copy.form.fields.firstName.placeholder} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-600">
                        {copy.form.fields.lastName.label}
                      </label>
                      <Input placeholder={copy.form.fields.lastName.placeholder} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-600">
                        {copy.form.fields.email.label}
                      </label>
                      <Input placeholder={copy.form.fields.email.placeholder} type="email" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-600">
                        {copy.form.fields.phone.label}
                      </label>
                      <Input placeholder={copy.form.fields.phone.placeholder} type="tel" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      {copy.form.fields.message.label}
                    </label>
                    <Textarea placeholder={copy.form.fields.message.placeholder} />
                  </div>

                  <Button className="w-full text-base" size="lg">
                    {copy.form.button}
                  </Button>

                  <p className="text-xs text-slate-500">{copy.form.note}</p>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
          <div className="relative flex-1 overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-floating">
            <div
              className="h-[360px] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-6 shadow-floating backdrop-blur">
              <p className="text-sm font-semibold text-brand-blue">{copy.location.tag}</p>
              <h3 className="text-2xl font-semibold text-brand-dark">{copy.location.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{copy.location.body}</p>
              <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
                <MapPin className="h-5 w-5 text-brand-blue" />
                {copy.location.address}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 rounded-4xl border border-slate-100 bg-white p-8 shadow-floating">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
              {copy.support.tag}
            </p>
            <h3 className="text-3xl font-semibold text-brand-dark">{copy.support.title}</h3>
            <p className="text-slate-600">{copy.support.body}</p>
            <div className="space-y-4">
              {copy.support.cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm sm:flex-row sm:items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-brand-dark">{card.title}</p>
                        <p className="text-sm text-slate-500">{card.copy}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
                    >
                      {card.action}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-indigo to-brand-blue text-white shadow-glow">
            <div className="flex flex-col gap-8 p-10 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                  {copy.cta.tag}
                </p>
                <h3 className="text-3xl font-semibold">{copy.cta.title}</h3>
                <p className="text-sm text-white/80">{copy.cta.body}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/pension-lookup"
                  className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-brand-blue shadow-md transition hover:bg-white/90"
                >
                  {copy.cta.primary}
                </Link>
                <Link
                  to="/#contact"
                  className="inline-flex items-center rounded-2xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  {copy.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

