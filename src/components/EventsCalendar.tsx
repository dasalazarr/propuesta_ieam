import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Event } from '@/data/mockData';

interface EventsCalendarProps {
  events?: Event[];
}

export default function EventsCalendar({ events = [] }: EventsCalendarProps) {
  const getEventTypeColor = (type: string) => {
    const colors = {
      'webinar': 'bg-blue-100 text-blue-700 border-blue-200',
      'conference': 'bg-purple-100 text-purple-700 border-purple-200',
      'workshop': 'bg-green-100 text-green-700 border-green-200',
      'seminar': 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return colors[type as keyof typeof colors] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      full: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
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
              Upcoming Events
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join our community of researchers, policymakers, and practitioners at upcoming events
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Date Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                          <div className="text-2xl font-bold leading-none">
                            {formatDate(event.date).day}
                          </div>
                          <div className="text-xs font-medium uppercase">
                            {formatDate(event.date).month}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        {/* Type Badge */}
                        <Badge className={`${getEventTypeColor(event.type)} border text-xs`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {event.description}
                        </p>

                        {/* Meta Info */}
                        <div className="space-y-2 text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(event.date).full}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                          <Button variant="ghost" size="sm" className="gap-2 group-hover:bg-blue-50 group-hover:text-blue-600">
                            Learn More
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center pt-4">
            <Button variant="outline" size="lg" className="gap-2">
              <Calendar className="w-4 h-4" />
              View Full Calendar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
