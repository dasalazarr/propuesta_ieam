import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { getEventBySlug } from '@/data/events';
import { useTranslation } from 'react-i18next';
import EventRegistrationForm from '@/components/EventRegistrationForm';

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
    galleryTitle: isEn ? "Event Gallery" : "Galería del evento",
    documentsTitle: isEn ? "Documents & Press" : "Documentos y Prensa",
  } : null;

  if (!event || !localizedEvent) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
          {isEn ? 'Event not found' : 'Evento no encontrado'}
        </h1>
        <p className="text-slate-600 mb-8 text-center max-w-md">
          {isEn ? 'Check the link or return to the agenda.' : 'Verifica el enlace o regresa a la agenda.'}
        </p>
        <a href="/eventos" className="px-6 py-3 bg-[var(--color-navy-900)] text-white font-bold uppercase tracking-[0.18em] rounded-none hover:bg-[var(--color-mediterranean)] transition-colors">
          {isEn ? 'Back to events' : 'Volver a eventos'}
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
            className="w-full h-full object-cover opacity-40 focus:outline-none"
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
                {localizedEvent.category}
              </span>
              <span className="text-[var(--color-cream)]/80">{localizedEvent.location}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-4 text-[var(--color-cream)]">
              {localizedEvent.title}
            </h1>
            <p className="text-xl leading-relaxed mb-6 text-[var(--color-cream)]/90">{localizedEvent.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-[var(--color-cream)]/80">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#F2D4D6]" /> {event.date}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#F2D4D6]" /> {localizedEvent.location}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#F2D4D6]" /> {localizedEvent.format}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-12">
            <div className="prose prose-slate max-w-none">
              {localizedEvent.content ? (
                <div dangerouslySetInnerHTML={{ __html: localizedEvent.content }} className="text-slate-700 text-lg leading-relaxed [&_p]:mb-4 [&_h3]:text-2xl [&_h3]:font-serif [&_h3]:font-bold [&_h3]:text-[var(--color-navy-900)] [&_h3]:mt-8 [&_h3]:mb-4" />
              ) : (
                localizedEvent.summary.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-700 text-lg leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))
              )}
            </div>

            {/* Gallery Section */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="space-y-6 pt-8 border-t hairline">
                <h3 className="text-2xl font-serif font-bold text-[var(--color-navy-900)]">{localizedEvent.galleryTitle}</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {event.gallery.map((img, idx) => (
                    <div key={idx} className="group relative overflow-hidden bg-slate-100 aspect-[4/3] border hairline">
                      <img
                        src={img}
                        alt={`${localizedEvent.title} - ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
                        
            {event.slug === 'lanzamiento-oficial-ieam' && !event.gallery && (
              <EventRegistrationForm />
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Highlight Image */}
            {event.highlightImage && (
              <div className="overflow-hidden border hairline shadow-sm">
                <img
                  src={event.highlightImage}
                  alt={localizedEvent.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            {/* Documents Section */}
            {event.documents && event.documents.length > 0 && (
              <div className="border hairline p-6 bg-white shadow-sm space-y-4">
                <h3 className="text-lg font-serif font-bold text-[var(--color-navy-900)] border-b border-[var(--color-navy-900)]/10 pb-3">
                  {localizedEvent.documentsTitle}
                </h3>
                <div className="space-y-3">
                  {event.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[var(--color-paper-warm)] hover:bg-[var(--color-cream)] transition-colors group border hairline"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-white border hairline text-[var(--color-accent-red)]">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        </div>
                        <span className="text-sm font-bold text-[var(--color-navy-900)] uppercase tracking-wider">
                          {isEn && doc.label_en ? doc.label_en : doc.label}
                        </span>
                      </div>
                      <div className="text-[var(--color-navy-900)] opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers sidebar */}
            {event.speakers && event.speakers.length > 0 && event.slug !== 'dialogo-mediterraneo-rabat' && (
              <div className="border hairline p-6 bg-[var(--color-paper-warm)]">
                <h3 className="text-lg font-serif font-bold text-[var(--color-text-primary)] mb-4">
                  {isEn ? 'Speakers' : 'Ponentes'}
                </h3>

                {(() => {
                  const hasGroups = event.speakers.some((s) => s.group);

                  if (hasGroups) {
                    const groups: Record<string, typeof event.speakers> = {};
                    const groupOrder: string[] = [];

                    event.speakers.forEach((speaker) => {
                      const groupName =
                        isEn
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
                                      {isEn && speaker.role_en ? speaker.role_en : speaker.role}
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
                      {event.speakers
                        .map((speaker) => (
                        <li key={speaker.name} className="text-slate-700">
                          <div className="font-semibold leading-tight">{speaker.name}</div>
                          {speaker.role && <div className="text-sm text-slate-500 mt-0.5">{isEn && speaker.role_en ? speaker.role_en : speaker.role}</div>}
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
