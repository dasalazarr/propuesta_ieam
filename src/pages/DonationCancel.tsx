import { Link } from 'react-router-dom';
import { XCircle, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DonationCancel = () => {
    return (
        <div className="min-h-screen bg-[var(--color-paper)]">
            <Navigation />

            <section className="section-shell-lg">
                <div className="page-shell">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Cancel Icon */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100">
                                <XCircle className="w-10 h-10 text-slate-400" />
                            </div>
                        </div>

                        {/* Message */}
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-navy-900)] mb-4">
                            Pago no completado
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            No se ha realizado ningún cargo. Si has tenido algún problema técnico
                            o tienes dudas, no dudes en contactarnos.
                        </p>

                        {/* Options */}
                        <div className="space-y-4 mb-8">
                            <h2 className="text-lg font-serif font-bold text-[var(--color-navy-900)] mb-4">
                                ¿Cómo podemos ayudarte?
                            </h2>

                            <div className="grid gap-4 md:grid-cols-2">
                                {/* Try Again */}
                                <Link
                                    to="/colabora"
                                    className="flex items-center justify-between p-4 bg-[var(--color-navy-900)] text-white hover:bg-[var(--color-mediterranean)] transition-colors group"
                                >
                                    <span className="font-medium">Intentar de nuevo</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                {/* Contact */}
                                <a
                                    href="mailto:colabora@ieam.es?subject=Ayuda%20con%20donación"
                                    className="flex items-center justify-between p-4 bg-white border border-[var(--color-border)] text-[var(--color-navy-900)] hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5" />
                                        <span className="font-medium">Contactar por email</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Alternative Ways */}
                        <div className="bg-white border border-[var(--color-border)] p-6 text-left">
                            <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-3 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Otras formas de colaborar
                            </h3>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• Comparte nuestros análisis en redes sociales</li>
                                <li>• Suscríbete a nuestro newsletter</li>
                                <li>• Participa en nuestros eventos</li>
                                <li>• Contacta para colaboraciones institucionales</li>
                            </ul>
                        </div>

                        {/* Back to Home */}
                        <div className="mt-12">
                            <Link
                                to="/"
                                className="text-sm text-slate-500 hover:text-[var(--color-mediterranean)] transition-colors"
                            >
                                ← Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DonationCancel;
