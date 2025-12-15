import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DonationSuccess = () => {
    return (
        <div className="min-h-screen bg-[var(--color-paper)]">
            <Navigation />

            <section className="section-shell-lg">
                <div className="page-shell">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Success Icon */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                        </div>

                        {/* Thank You Message */}
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-navy-900)] mb-4">
                            ¡Gracias por tu apoyo!
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Tu contribución impulsa la investigación independiente sobre seguridad,
                            migraciones y geopolítica en el espacio euro-africano y mediterráneo.
                        </p>

                        {/* Confirmation Details */}
                        <div className="bg-white border border-[var(--color-border)] p-6 mb-8">
                            <p className="text-sm text-slate-500 mb-2">
                                Recibirás un correo de confirmación con los detalles de tu donación.
                            </p>
                            <p className="text-sm text-slate-500">
                                Si tienes alguna pregunta, contacta con nosotros en{' '}
                                <a
                                    href="mailto:colabora@ieam.es"
                                    className="text-[var(--color-mediterranean)] hover:underline"
                                >
                                    colabora@ieam.es
                                </a>
                            </p>
                        </div>

                        {/* Next Steps */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-serif font-bold text-[var(--color-navy-900)] mb-4">
                                ¿Qué más puedes hacer?
                            </h2>

                            <div className="grid gap-4 md:grid-cols-2">
                                {/* Newsletter CTA */}
                                <Link
                                    to="/"
                                    className="flex items-center justify-between p-4 bg-[var(--color-navy-900)] text-white hover:bg-[var(--color-mediterranean)] transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5" />
                                        <span className="font-medium">Suscríbete al newsletter</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                {/* Explore Research */}
                                <Link
                                    to="/investigacion"
                                    className="flex items-center justify-between p-4 bg-white border border-[var(--color-border)] text-[var(--color-navy-900)] hover:bg-slate-50 transition-colors group"
                                >
                                    <span className="font-medium">Explora nuestra investigación</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
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

export default DonationSuccess;
