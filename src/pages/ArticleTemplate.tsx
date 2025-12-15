import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Card } from '@/components/ui/UnifiedCard';

const related = [
  {
    title: "Rutas migratorias en 2026: Proyecciones y tendencias",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    badge: "Análisis",
    metadata: { date: "08 Dic 2025", readTime: "8 min" }
  },
  {
    title: "Policy Brief: Visados humanitarios",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    badge: "Policy Brief",
    metadata: { date: "01 Dic 2025", readTime: "6 min" }
  },
  {
    title: "Entrevista: 'La migración circular es el futuro de la cooperación'",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
    badge: "Entrevista",
    metadata: { date: "01 Dic 2025", readTime: "10 min" }
  }
];

const ArticleTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-[#0A2540] text-white section-shell overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2670&auto=format&fit=crop"
            alt="Sea horizon"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/85 to-transparent"></div>
        </div>
        <div className="relative z-10 page-shell">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F2D4D6] mb-4">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--color-accent-red)] rounded-full" />
                Informe Especial
              </span>
              <span className="text-white/70">Migración · Mediterráneo</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              De la emergencia a la estructura: una agenda de movilidad entre África y Europa
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mb-6">
              Un marco para ordenar la movilidad, reducir los costes humanos y crear beneficios compartidos para países de origen, tránsito y destino.
            </p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-slate-300">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 12 Dic 2025</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Equipo IEAM</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 12 min lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main image */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-sm border hairline">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2700&auto=format&fit=crop"
              alt="Main illustration"
              className="w-full h-[420px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-4 text-white text-sm">
              Trayectos de movilidad regulada entre Bamako, Dakar y Madrid.
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="mx-auto reading-width space-y-8 text-slate-700 leading-relaxed">
            <p>
              La gestión migratoria en el eje África–Europa ha estado marcada por respuestas de emergencia que, aunque necesarias en el corto plazo, generan efectos secundarios: rutas más peligrosas, dependencia de actores informales y altos costes humanos. Este informe propone pasar de la reacción a la arquitectura: crear canales seguros, mecanismos de retorno con reintegración y una gobernanza compartida basada en datos.
            </p>
            <p>
              La evidencia recogida en talleres con actores de Mali, Mauritania, Senegal, Marruecos y España muestra que la movilidad ordenada reduce la presión en fronteras, facilita la inserción laboral y mejora la cooperación diplomática. Se recomienda establecer programas piloto de visados laborales circulares y reforzar los sistemas de información temprana para anticipar picos de desplazamiento.
            </p>

            <div className="border-l-4 border-[var(--color-accent-red)] bg-[var(--color-paper-warm)] px-6 py-4 text-lg font-serif italic text-[var(--color-text-primary)]">
              “La movilidad es inevitable; la diferencia está entre gestionarla con reglas claras o asumir sus costes en la irregularidad.”
            </div>

            <p>
              El componente de cooperación debe incluir inversión en formación, reconocimiento de cualificaciones y apoyo a la diáspora para catalizar inversiones productivas en origen. Esto exige marcos bilaterales flexibles y un seguimiento continuo con métricas compartidas.
            </p>

            <div className="bg-slate-50 border hairline rounded-sm p-6 text-sm text-slate-600">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Visualización</div>
              <p className="mb-2">[Placeholder] Inserta aquí gráfico interactivo de flujos 2020–2026 (Embla/iframe o componente de datos).</p>
              <p>Recomendación: usar ancho `reading-width`, fondo claro y leyenda fija a la derecha para mantener la narrativa limpia.</p>
            </div>

            <p>
              La agenda propuesta se estructura en tres horizontes: (1) contención humanitaria con estándares de protección, (2) corredores legales y retornos con reintegración y (3) movilidad circular como palanca de codesarrollo. Cada fase requiere indicadores de éxito y transparencia comunicativa para consolidar legitimidad.
            </p>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="section-shell bg-[var(--color-paper-warm)] border-y hairline">
        <div className="page-shell">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop"
              alt="Autor"
              className="w-24 h-24 rounded-full object-cover border hairline"
              loading="lazy"
              decoding="async"
            />
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-bold mb-2">Autor</div>
              <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-1">María L. Crespo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Directora de análisis en IEAM. Especialista en movilidad África–Europa y negociaciones bilaterales de talento. Ha coordinado talleres de inteligencia colectiva en Bamako, Dakar y Rabat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="eyebrow mb-2">Artículos relacionados</span>
              <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)]">Sigue explorando</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item, idx) => (
              <Card
                key={idx}
                variant="standard"
                title={item.title}
                image={item.image}
                badge={item.badge}
                metadata={item.metadata}
                ctaLink={`/investigacion/rel-${idx}`}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default ArticleTemplate;
