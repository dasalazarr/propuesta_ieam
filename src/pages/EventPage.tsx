import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { getEventBySlug } from '@/data/events';
import { useTranslation } from 'react-i18next';

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const event = getEventBySlug(slug || '');

  // Localization helper
  const isEn = i18n.language.startsWith('en');

  const localizedEvent = event ? {
    title: (isEn && event.title_en) ? event.title_en : event.title,
    subtitle: (isEn && event.subtitle_en) ? event.subtitle_en : event.subtitle,
    summary: (isEn && event.summary_en) ? event.summary_en : event.summary,
    location: (isEn && event.location_en) ? event.location_en : event.location,
    format: (isEn && event.format_en) ? event.format_en : event.format,
    category: (isEn && event.category_en) ? event.category_en : event.category,
    content: (isEn && event.content_en) ? event.content_en : event.content,
    heroImage: (isEn && event.heroImage_en) ? event.heroImage_en : event.heroImage,
    // Agenda and Speakers are currently structurally shared, titles might need specific translation keys if we want deep localization
    // For now we use the existing data as is, assuming names/roles might be mixed or Spanish.
    // If needed, we would need agenda_en etc. in data structure.
  } : null;

  if (!event || !localizedEvent) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
          {i18n.language.startsWith('en') ? 'Event not found' : 'Evento no encontrado'}
        </h1>
        <p className="text-slate-600 mb-8 text-center max-w-md">
          {i18n.language.startsWith('en') ? 'Check the link or return to the agenda.' : 'Verifica el enlace o regresa a la agenda.'}
        </p>
        <a href="/eventos" className="px-6 py-3 bg-[var(--color-navy-900)] text-white font-bold uppercase tracking-[0.18em] rounded-none hover:bg-[var(--color-mediterranean)] transition-colors">
          {i18n.language.startsWith('en') ? 'Back to events' : 'Volver a eventos'}
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative bg-[var(--color-navy-900)] text-[var(--color-cream)] section-shell overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={localizedEvent.heroImage}
            alt={localizedEvent.title}
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 page-shell">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F2D4D6] mb-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--color-accent-red)] rounded-full" />
                {localizedEvent.format}
              </span>
              <span className="text-[var(--color-cream)]/80">{localizedEvent.location}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-4 text-[var(--color-cream)]">
              {localizedEvent.title}
            </h1>
            <p className="text-xl leading-relaxed mb-6 text-[var(--color-cream)]/90">{localizedEvent.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-[var(--color-cream)]/80">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.date}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {localizedEvent.location}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {localizedEvent.format}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            {localizedEvent.content ? (
              <div dangerouslySetInnerHTML={{ __html: localizedEvent.content }} className="text-slate-700 text-lg leading-relaxed [&_p]:mb-4" />
            ) : (
              localizedEvent.summary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))
            )}
            {event.agenda && event.agenda.length > 0 && (
              <div className="border-t hairline pt-6 space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)]">
                  {i18n.language.startsWith('en') ? 'Agenda' : 'Agenda'}
                </h2>
                <ul className="space-y-3">
                  {event.agenda.map((item, idx) => {
                    const hasDate = item.time && item.time.includes(' - ');
                    const datePart = hasDate ? item.time?.split(' - ')[0] : null;
                    const timePart = hasDate ? item.time?.split(' - ')[1] : item.time;

                    return (
                      <li key={idx} className={`block text-slate-700 ${datePart ? 'mt-6 first:mt-0' : ''}`}>
                        {datePart && (
                          <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-red)] mb-2 border-b border-[var(--color-text-primary)]/10 pb-1">
                            {datePart}
                          </div>
                        )}
                        <div className="flex gap-4">
                          {timePart && <span className="min-w-[64px] text-sm font-bold text-[var(--color-text-primary)]">{timePart}</span>}
                          <div>
                            <div className="font-semibold">{item.title}</div>
                            {item.speaker && <div className="text-sm text-slate-500">{item.speaker}</div>}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            {event.highlightImage && (
              <div className="overflow-hidden border hairline">
                <img
                  src={event.highlightImage}
                  alt={localizedEvent.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            {event.speakers && event.speakers.length > 0 && (
              <div className="border hairline p-6 bg-[var(--color-paper-warm)]">
                <h3 className="text-lg font-serif font-bold text-[var(--color-text-primary)] mb-4">
                  {i18n.language.startsWith('en') ? 'Speakers' : 'Ponentes'}
                </h3>

                {(() => {
                  const hasGroups = event.speakers.some((s) => s.group);

                  if (hasGroups) {
                    const groups: Record<string, typeof event.speakers> = {};
                    const groupOrder: string[] = [];

                    event.speakers.forEach((speaker) => {
                      const groupName =
                        i18n.language.startsWith('en')
                          ? speaker.group_en || speaker.group || "General"
                          : speaker.group || "General";
                      if (!groups[groupName]) {
                        groups[groupName] = [];
                        groupOrder.push(groupName);
                      }
                      groups[groupName].push(speaker);
                    });

                    return (
                      <div className="space-y-6">
                        {groupOrder.map((group) => (
                          <div key={group}>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]/70 mb-3 border-b border-[var(--color-navy-900)]/10 pb-1">
                              {group}
                            </h4>
                            <ul className="space-y-3">
                              {groups[group].map((speaker) => (
                                <li key={speaker.name} className="text-slate-700">
                                  <div className="font-semibold leading-tight">
                                    {speaker.name}
                                  </div>
                                  {speaker.role && (
                                    <div className="text-sm text-slate-500 mt-0.5">
                                      {speaker.role}
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    );
                  }

                  return (
                    <ul className="space-y-3">
                      {event.speakers.map((speaker) => (
                        <li key={speaker.name} className="text-slate-700">
                          <div className="font-semibold leading-tight">{speaker.name}</div>
                          {speaker.role && <div className="text-sm text-slate-500 mt-0.5">{speaker.role}</div>}
                        </li>
                      ))}
                    </ul>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default EventPage;
