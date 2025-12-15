import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Calendar, MapPin, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ContentPackage } from '@/data/mockData';

interface ResearchListingsProps {
  listings?: ContentPackage[];
}

export default function ResearchListings({ listings = [] }: ResearchListingsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || listing.type === selectedType;
    const matchesRegion = selectedRegion === 'all' || listing.region.includes(selectedRegion);

    return matchesSearch && matchesType && matchesRegion;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      'policy-paper': 'bg-blue-100 text-blue-700 border-blue-200',
      'research': 'bg-purple-100 text-purple-700 border-purple-200',
      'report': 'bg-green-100 text-green-700 border-green-200',
      'analysis': 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return colors[type as keyof typeof colors] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'policy-paper': 'Documento de Política',
      'research': 'Investigación',
      'report': 'Informe',
      'analysis': 'Análisis',
    };
    return labels[type] || type;
  };

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
              Explora la Evidencia
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Descubre nuestra colección completa de investigación migratoria, análisis de políticas y conocimientos basados en datos
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Buscar investigación..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de Publicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los Tipos</SelectItem>
                  <SelectItem value="policy-paper">Documentos de Política</SelectItem>
                  <SelectItem value="research">Investigación</SelectItem>
                  <SelectItem value="report">Informes</SelectItem>
                  <SelectItem value="analysis">Análisis</SelectItem>
                </SelectContent>
              </Select>

              {/* Region Filter */}
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Región" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las Regiones</SelectItem>
                  <SelectItem value="West Africa">África Occidental</SelectItem>
                  <SelectItem value="Europe">Europa</SelectItem>
                  <SelectItem value="Mediterranean">Mediterráneo</SelectItem>
                  <SelectItem value="Sahel">Sahel</SelectItem>
                  <SelectItem value="North Africa">África del Norte</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {(searchQuery || selectedType !== 'all' || selectedRegion !== 'all') && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200">
                <Filter className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-600">Filtros activos:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Búsqueda: {searchQuery}
                    <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-slate-900">×</button>
                  </Badge>
                )}
                {selectedType !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    Tipo: {getTypeLabel(selectedType)}
                    <button onClick={() => setSelectedType('all')} className="ml-1 hover:text-slate-900">×</button>
                  </Badge>
                )}
                {selectedRegion !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    Región: {selectedRegion}
                    <button onClick={() => setSelectedRegion('all')} className="ml-1 hover:text-slate-900">×</button>
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="text-sm text-slate-600">
            Mostrando <span className="font-semibold text-slate-900">{filteredListings.length}</span> {filteredListings.length === 1 ? 'elemento' : 'elementos'} de investigación
          </div>

          {/* Listings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-blue-200">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Type Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className={`${getTypeColor(listing.type)} border`}>
                          {getTypeLabel(listing.type)}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {listing.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {listing.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                        {listing.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 text-xs text-slate-500 pt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(listing.date).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {listing.region[0]}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {listing.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-2.5 h-2.5 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                        {listing.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{listing.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      {/* CTA */}
                      <Button variant="ghost" className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600">
                        Leer Más →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {filteredListings.length > 0 && (
            <div className="text-center pt-8">
              <Button variant="outline" size="lg" className="gap-2">
                Cargar Más Investigación
                <motion.span
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No se encontraron resultados</h3>
              <p className="text-slate-600">Intenta ajustar tus filtros o término de búsqueda</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
