import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { DashboardWidget } from '@/data/mockData';

interface DashboardCarouselProps {
  widgets?: DashboardWidget[];
}

export default function DashboardCarousel({ widgets = [] }: DashboardCarouselProps) {
  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-slate-600" />;
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-50';
      case 'down':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Migration Intelligence Dashboard
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-time insights and key metrics from our ongoing research initiatives
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {widgets.map((widget, index) => (
                  <CarouselItem key={widget.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
                        <CardContent className="p-6 space-y-4">
                          {/* Title */}
                          <div className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">
                            {widget.title}
                          </div>

                          {/* Value */}
                          <div className="space-y-2">
                            <div className="text-4xl font-bold text-slate-900">
                              {widget.value}
                            </div>
                            
                            {/* Trend */}
                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getTrendColor(widget.trend)}`}>
                              {getTrendIcon(widget.trend)}
                              {widget.change}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {widget.description}
                          </p>

                          {/* Progress Bar */}
                          <div className="pt-2">
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '75%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-2 group">
              View Full Analytics Dashboard
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
