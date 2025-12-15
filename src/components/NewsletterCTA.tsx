import React from 'react';
import { ArrowRight, Mail, Twitter, Linkedin, Youtube } from 'lucide-react';

const NewsletterCTA = () => {
    return (
        <section className="bg-[var(--color-navy-900)] section-shell border-t hairline relative">
            <div className="page-shell">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div className="space-y-6">
                        <div>
                            <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9FC5E5] mb-2">
                                <span className="w-2 h-2 bg-[#9FC5E5] rounded-full" />
                                <span>Contacto</span>
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-white mb-2">
                                Ponte en contacto con nosotros
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte y colaborar en proyectos relacionados con migraciones y políticas públicas.
                            </p>
                        </div>

                        <form className="max-w-md bg-white/5 border border-[#1e4976] rounded-sm p-4 space-y-3">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="flex-grow bg-white text-[#0A2540] placeholder:text-slate-400 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#006994] rounded-sm"
                                />
                                <button className="bg-[var(--color-mediterranean)] hover:bg-[#005a80] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center rounded-sm">
                                    Enviar
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex items-start">
                                <input
                                    id="privacy"
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 text-[#006994] border-slate-500 rounded focus:ring-[#006994] bg-[#0A2540]"
                                />
                                <label htmlFor="privacy" className="ml-2 text-xs text-slate-300 leading-snug">
                                    Acepto la <a href="/privacy" className="text-white hover:underline">política de privacidad</a>.
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="lg:pl-12 lg:border-l border-[#1e4976]">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">
                            Síguenos en redes
                        </h3>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="bg-[#1e4976] hover:bg-[var(--color-mediterranean)] text-white p-4 rounded-full transition-all duration-300 group">
                                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="bg-[#1e4976] hover:bg-[var(--color-mediterranean)] text-white p-4 rounded-full transition-all duration-300 group">
                                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="bg-[#1e4976] hover:bg-[var(--color-accent-red)] text-white p-4 rounded-full transition-all duration-300 group">
                                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                        <p className="text-slate-300 text-sm max-w-md">
                            Conversaciones abiertas con la comunidad IEAM: actualizaciones, directos y convocatorias.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsletterCTA;
