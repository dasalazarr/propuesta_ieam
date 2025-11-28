import { motion } from 'framer-motion';
import { Users, FileText, Globe, Award } from 'lucide-react';

export default function ImpactMetrics() {
  const metrics = [
    {
      icon: FileText,
      value: '250+',
      label: 'Research Publications',
      description: 'Evidence-based studies and reports'
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Stakeholders Reached',
      description: 'Policymakers and practitioners'
    },
    {
      icon: Globe,
      value: '35',
      label: 'Countries Covered',
      description: 'Across Africa and Europe'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Policy Changes',
      description: 'Influenced by our research'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">
              Our Impact
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Driving evidence-based migration policy through rigorous research and data analysis
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="space-y-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-blue-100">
                      {metric.label}
                    </div>
                    <div className="text-sm text-blue-200">
                      {metric.description}
                    </div>
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
