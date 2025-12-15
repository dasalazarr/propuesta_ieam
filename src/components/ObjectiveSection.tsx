import { motion } from 'framer-motion';

export default function ObjectiveSection() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6"
                    >
                        <div className="space-y-2">
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                                Objetivo IEAM 2025
                            </h2>
                            <p className="text-xl text-slate-600 font-medium">
                                Construir una narrativa basada en datos para una migración segura y ordenada.
                            </p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            Nuestro objetivo es ser la referencia principal en el análisis de políticas migratorias en el Mediterráneo. Trabajamos para cerrar la brecha entre la investigación académica y la toma de decisiones políticas, proporcionando evidencia sólida que permita desarrollar estrategias de migración más humanas, eficientes y sostenibles.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            A través de alianzas estratégicas y un enfoque multidisciplinar, buscamos transformar el debate público y fomentar la cooperación internacional.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                                alt="Equipo IEAM"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
