import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { getEventBySlug } from '@/data/events';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const event = getEventBySlug(slug || '');

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
  } : null;

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    const gallery = event?.gallery || [];
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') setLightboxIndex((prev) => prev !== null ? (prev + 1) % gallery.length : 0);
    if (e.key === 'ArrowLeft') setLightboxIndex((prev) => prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0);
  }, [lightboxIndex, event?.gallery]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

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

  const gallery = event.gallery || [];
  const attachments = event.attachments || [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
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
                {isEn ? 'In-person' : 'Presencial'}
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

            {/* Download buttons in hero — same pattern as ArticlePage */}
            {attachments.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {attachments.map((att) => (
                  <a
                    key={att.url}
                    href={att.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent-red)] text-white font-bold uppercase tracking-[0.18em] text-xs hover:bg-[#b01b22] transition-colors"
                  >
                    <Download className="w-4 h-4 flex-shrink-0" />
                    {isEn && att.label_en ? att.label_en : att.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-shell">
        <div className="page-shell grid lg:grid-cols-12 gap-12">

          {/* Left column: article content + agenda */}
          <div className="lg:col-span-7 space-y-8">
            {localizedEvent.content ? (
              <div
                dangerouslySetInnerHTML={{ __html: localizedEvent.content }}
                className="
                  prose prose-slate max-w-none
                  text-slate-700 text-lg leading-[1.85]
                  [&_p]:mb-5 [&_p]:text-slate-700
                  [&_h3]:text-2xl [&_h3]:font-serif [&_h3]:font-bold [&_h3]:text-[var(--color-text-primary)] [&_h3]:mt-10 [&_h3]:mb-4
                  [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-[var(--color-text-primary)] [&_h4]:mt-8 [&_h4]:mb-3
                  [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-5
                  [&_li]:text-slate-700 [&_li]:leading-relaxed
                  [&_b]:font-semibold [&_b]:text-[var(--color-text-primary)]
                  [&_img]:rounded-sm [&_img]:shadow-md [&_img]:my-8
                  [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-accent-red)] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600
                "
              />
            ) : (
              localizedEvent.summary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 text-lg leading-[1.85] mb-5">
                  {paragraph}
                </p>
              ))
            )}

            {/* Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="border-t hairline pt-6 space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)]">
                  {isEn
                    ? (event.agendaTitle_en || event.agendaTitle || 'Agenda')
                    : (event.agendaTitle || 'Agenda')}
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
                          {timePart && <span className="min-w-[85px] text-sm font-bold text-[var(--color-text-primary)]">{timePart}</span>}
                          <div>
                            <div className="font-semibold">{isEn && item.title_en ? item.title_en : item.title}</div>
                            {(isEn && item.speaker_en ? item.speaker_en : item.speaker) && (
                              <div className="text-sm text-slate-500 mt-1">
                                {isEn && item.speaker_en ? item.speaker_en : item.speaker}
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Photo gallery */}
            {gallery.length > 0 && (
              <div className="border-t hairline pt-8">
                <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-5">
                  {isEn ? 'Photo Gallery' : 'Galería de fotos'}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {gallery.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className="group overflow-hidden border hairline focus:outline-none focus:ring-2 focus:ring-[var(--color-navy-900)] focus:ring-offset-2"
                      aria-label={`${isEn ? 'Open photo' : 'Abrir foto'} ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${localizedEvent.title} — ${idx + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right sidebar: highlight image + speakers */}
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
                          ? speaker.group_en || speaker.group || 'General'
                          : speaker.group || 'General';
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
                                  <div className="font-semibold leading-tight">{speaker.name}</div>
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
                      {event.speakers.map((speaker) => (
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

      {/* Lightbox */}
      {lightboxIndex !== null && gallery.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={isEn ? 'Photo gallery' : 'Galería de fotos'}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors z-10"
            aria-label={isEn ? 'Close' : 'Cerrar'}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          {gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length); }}
              className="absolute left-4 text-white/80 hover:text-white transition-colors z-10 p-2"
              aria-label={isEn ? 'Previous' : 'Anterior'}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {/* Image */}
          <img
            src={gallery[lightboxIndex]}
            alt={`${localizedEvent.title} — ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % gallery.length); }}
              className="absolute right-4 text-white/80 hover:text-white transition-colors z-10 p-2"
              aria-label={isEn ? 'Next' : 'Siguiente'}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono tracking-widest">
            {lightboxIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage;
