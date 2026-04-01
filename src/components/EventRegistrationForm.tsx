import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EventRegistrationForm = () => {
    const { i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        idDocument: '',
        organization: '',
        position: '',
        email: '',
        consentFuture: false,
        consentPhoto: false
    });

    const [status, setStatus] = useState<{
        isSubmitting: boolean;
        message: string | null;
        type: 'success' | 'error' | null;
    }>({
        isSubmitting: false,
        message: null,
        type: null
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ isSubmitting: true, message: null, type: null });

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);

            const templateParams = {
                name: formData.name,
                surname: formData.surname,
                email: formData.email,
                idDocument: formData.idDocument,
                organization: formData.organization,
                position: formData.position,
                consentFuture: formData.consentFuture ? 'Sí' : 'No',
                consentPhoto: formData.consentPhoto ? 'Sí' : 'No'
            };

            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    service_id: "service_n9vux1v",
                    template_id: "template_giusocj",
                    user_id: "pJE3a1QQcx7YTTB2A",
                    template_params: templateParams
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (response.ok) {
                setStatus({
                    isSubmitting: false,
                    message: isEn ? "Registration successful. Thank you!" : "Inscripción completada. ¡Gracias!",
                    type: 'success'
                });
                setFormData({
                    name: '',
                    surname: '',
                    idDocument: '',
                    organization: '',
                    position: '',
                    email: '',
                    consentFuture: false,
                    consentPhoto: false
                });
            } else {
                const errorText = await response.text();
                throw new Error(errorText || 'Error sending message');
            }
        } catch (error: any) {
            console.error('Submission error:', error);
            let errorMessage = isEn 
                ? "There was an error sending your registration. Please try again or contact info@ieam.es"
                : "Hubo un error al enviar la inscripción. Por favor, inténtalo de nuevo o escribe a info@ieam.es";

            if (error.name === 'AbortError') {
                errorMessage = isEn ? "Connection timed out. Please check your internet." : "El envío ha tardado demasiado. Por favor, verifica tu conexión a internet.";
            }

            setStatus({
                isSubmitting: false,
                message: errorMessage,
                type: 'error'
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="bg-slate-50 rounded-sm p-8 lg:p-10 border border-slate-200 shadow-sm mt-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#D4212A]"></div>
            <h2 className="text-2xl font-serif font-bold text-[#0A2540] mb-8">
                {isEn ? 'Event Registration' : 'Inscripción al Evento'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                    <div className={`p-4 rounded-sm ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {status.message}
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                            {isEn ? 'Name' : 'Nombre'} <span className="text-[#D4212A]">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            disabled={status.isSubmitting}
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#D4212A] focus:ring-1 focus:ring-[#D4212A] outline-none transition-colors rounded-sm disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="surname" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                            {isEn ? 'Surnames' : 'Apellidos'} <span className="text-[#D4212A]">*</span>
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            required
                            disabled={status.isSubmitting}
                            value={formData.surname}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#D4212A] focus:ring-1 focus:ring-[#D4212A] outline-none transition-colors rounded-sm disabled:opacity-50"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="idDocument" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                        {isEn ? 'Passport or National ID' : 'Número de pasaporte o documento nacional de identidad'} <span className="text-[#D4212A]">*</span>
                    </label>
                    <input
                        type="text"
                        id="idDocument"
                        name="idDocument"
                        required
                        disabled={status.isSubmitting}
                        value={formData.idDocument}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#D4212A] focus:ring-1 focus:ring-[#D4212A] outline-none transition-colors rounded-sm disabled:opacity-50"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="organization" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                            {isEn ? 'Organization' : 'Organización'}
                        </label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            disabled={status.isSubmitting}
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#D4212A] focus:ring-1 focus:ring-[#D4212A] outline-none transition-colors rounded-sm disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="position" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                            {isEn ? 'Position' : 'Cargo'}
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            disabled={status.isSubmitting}
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#D4212A] focus:ring-1 focus:ring-[#D4212A] outline-none transition-colors rounded-sm disabled:opacity-50"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                        {isEn ? 'Email address' : 'Correo electrónico'} <span className="text-[#D4212A]">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status.isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#D4212A] focus:ring-1 focus:ring-[#D4212A] outline-none transition-colors rounded-sm disabled:opacity-50"
                    />
                </div>

                <div className="border-t border-slate-200 pt-6 mt-6 space-y-6">
                    <h3 className="font-bold text-slate-800 uppercase tracking-wider text-sm mb-4">
                        {isEn ? 'GDPR Clause' : 'Cláusula de GDPR'}
                    </h3>
                    
                    <div className="bg-white p-4 border border-slate-200 rounded-sm">
                        <p className="text-sm text-slate-600 leading-relaxed">
                            <strong className="text-slate-800">{isEn ? 'Mandatory communications related to the event: ' : 'Comunicaciones obligatorias relacionadas con el evento: '}</strong> 
                            {isEn 
                                ? 'By completing this registration, your contact details will be used to manage the registration and to send the strictly necessary information for the organization and development of the workshop.' 
                                : 'Completando esta inscripción, sus datos de contacto se utilizarán para gestionar la inscripción y para enviar la información estrictamente necesaria para la organización y el desarrollo del taller.'}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm font-bold text-slate-800">
                            {isEn ? 'Optional future communications:' : 'Comunicaciones futuras opcionales:'}
                        </p>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="consentFuture"
                                name="consentFuture"
                                required
                                disabled={status.isSubmitting}
                                checked={formData.consentFuture}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-[#D4212A] border-slate-300 rounded focus:ring-[#D4212A] cursor-pointer"
                            />
                            <label htmlFor="consentFuture" className="ml-3 text-sm text-slate-600 leading-relaxed cursor-pointer">
                                {isEn 
                                    ? <>I consent that IEAM collects and processes my personal data in order to send me information about future events, publications and activities. I understand that I can withdraw and modify my consent at any time by contacting <a href="mailto:info@ieam.es" className="text-[#D4212A] hover:underline">info@ieam.es</a>. <span className="text-[#D4212A]">*</span></>
                                    : <>Consiento que el IEAM recopile y trate mis datos personales con el fin de enviarme información sobre futuros eventos, publicaciones y actividades. Entiendo que puedo retirar y modificar mi consentimiento en cualquier momento comunicándose con <a href="mailto:info@ieam.es" className="text-[#D4212A] hover:underline">info@ieam.es</a>. <span className="text-[#D4212A]">*</span></>}
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="consentPhoto"
                                name="consentPhoto"
                                disabled={status.isSubmitting}
                                checked={formData.consentPhoto}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-[#D4212A] border-slate-300 rounded focus:ring-[#D4212A] cursor-pointer"
                            />
                            <label htmlFor="consentPhoto" className="ml-3 text-sm text-slate-600 leading-relaxed cursor-pointer">
                                {isEn 
                                    ? <>I consent to be photographed or recorded during the event for communication and dissemination purposes on the IEAM website and on its social networks. I understand that I can withdraw and modify my consent at any time by contacting <a href="mailto:info@ieam.es" className="text-[#D4212A] hover:underline">info@ieam.es</a>.</>
                                    : <>Consiento ser fotografiado o grabado durante el evento con fines de comunicación y difusión en el sitio web del IEAM y en sus redes sociales. Entiendo que puedo retirar y modificar mi consentimiento en cualquier momento comunicándose con <a href="mailto:info@ieam.es" className="text-[#D4212A] hover:underline">info@ieam.es</a>.</>}
                            </label>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={status.isSubmitting || !formData.consentFuture}
                        className="w-full sm:w-auto px-8 py-4 bg-[#0A2540] hover:bg-[#0A3D62] disabled:bg-slate-400 text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center rounded-sm group"
                    >
                        {status.isSubmitting ? (isEn ? 'Sending...' : 'Enviando...') : (isEn ? 'Submit Registration' : 'Completar Inscripción')}
                        {!status.isSubmitting && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventRegistrationForm;
