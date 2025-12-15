import { motion } from 'framer-motion';
import { Mail, Linkedin, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Expert } from '@/data/mockData';

interface ExpertProfilesProps {
  experts?: Expert[];
}

export default function ExpertProfiles({ experts = [] }: ExpertProfilesProps) {
  return (
    <section className="bg-slate-50 py-16">
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
              Nuestro Equipo de Investigación
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conoce a los expertos que impulsan la investigación migratoria y la innovación política
            </p>
          </div>

          {/* Experts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-blue-200">
                  <CardContent className="p-6 text-center space-y-4">
                    {/* Avatar */}
                    <div className="relative inline-block">
                      <Avatar className="w-24 h-24 border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
                        <AvatarImage src={expert.image} alt={expert.name} />
                        <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                          {expert.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {expert.name}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        {expert.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {expert.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1.5 justify-center pt-2">
                      {expert.expertise.slice(0, 2).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {expert.expertise.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{expert.expertise.length - 2}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 justify-center pt-4">
                      <Button size="sm" variant="ghost" className="gap-2 hover:bg-blue-50 hover:text-blue-600">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="gap-2 hover:bg-blue-50 hover:text-blue-600">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="gap-2 hover:bg-blue-50 hover:text-blue-600">
                        <BookOpen className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center pt-4">
            <Button variant="outline" size="lg">
              View All Team Members
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
