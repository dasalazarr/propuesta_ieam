import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { DashboardWidget } from '@/data/mockData';

interface DashboardCarouselProps {
  widgets?: DashboardWidget[];
}

export default function DashboardCarousel({ widgets = [] }: DashboardCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Panel de Inteligencia Migratoria
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Información en tiempo real y métricas clave de nuestras iniciativas de investigación en curso
            </p>
          </div>

          {/* Carousel */}
          <div className="relative w-full">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
              {widgets.map((widget, index) => (
                <motion.div
                  key={widget.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="min-w-[300px] md:min-w-[350px] snap-center"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-500">
                            {widget.title}
                          </p>
                          <h3 className="text-3xl font-bold text-slate-900">
                            {widget.value}
                          </h3>
                        </div>
                        <div className={`p-2 rounded-full ${widget.trend === 'up' ? 'bg-green-100 text-green-600' :
                            widget.trend === 'down' ? 'bg-red-100 text-red-600' :
                              'bg-slate-100 text-slate-600'
                          }`}>
                          {widget.trend === 'up' ? <TrendingUp className="w-5 h-5" /> :
                            widget.trend === 'down' ? <TrendingDown className="w-5 h-5" /> :
                              <Minus className="w-5 h-5" />}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`text-sm font-medium ${widget.trend === 'up' ? 'text-green-600' :
                            widget.trend === 'down' ? 'text-red-600' :
                              'text-slate-600'
                          }`}>
                          {widget.change}
                        </div>
                        <p className="text-sm text-slate-500">
                          {widget.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-2 group">
              Ver Panel de Análisis Completo
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
