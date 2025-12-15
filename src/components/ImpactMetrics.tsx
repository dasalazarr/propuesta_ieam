import { motion } from 'framer-motion';
import { Users, BookOpen, Megaphone } from 'lucide-react';

export default function ImpactMetrics() {
  const methodologies = [
    {
      icon: Users,
      title: 'Diálogo Estratégico',
      description: 'Fomentamos el intercambio de alto nivel entre actores clave para construir consensos duraderos.'
    },
    {
      icon: BookOpen,
      title: 'Investigación',
      description: 'Generamos conocimiento riguroso y análisis profundo para comprender la complejidad migratoria.'
    },
    {
      icon: Megaphone,
      title: 'Incidencia',
      description: 'Influimos en la agenda pública y política con propuestas concretas y soluciones viables.'
    }
  ];

  return (
    <section className="bg-white py-24 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Nuestra Estrategia
            </h2>
            <div className="w-24 h-1 bg-[#0A2540] mx-auto" />
            <p className="text-xl text-slate-600 font-serif italic pt-4">
              "Un enfoque integral para transformar la narrativa y la gestión migratoria en Europa."
            </p>
          </div>

          {/* Methodology Grid */}
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 bg-white shadow-sm max-w-6xl mx-auto">
            {methodologies.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-12 text-center space-y-6 group hover:bg-slate-50 transition-colors duration-500"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 text-[#0A2540] mb-2 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
