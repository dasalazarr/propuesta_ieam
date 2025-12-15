/**
 * Donation Configuration
 * 
 * Centralized config for donation system.
 * Currently uses Stripe Payment Links (zero-code).
 * Ready to migrate to Checkout Sessions when backend is available.
 */

export type DonationMode = 'payment_links' | 'checkout_session';

export interface DonationTier {
    id: string;
    title: string;
    amount: number | 'custom';
    description: string;
    impact: string;
    featured?: boolean;
    paymentLink?: string;
}

// ============================================
// CONFIGURATION
// ============================================

export const DONATION_CONFIG = {
    /**
     * Current mode:
     * - 'payment_links': Uses Stripe Payment Links (no backend needed)
     * - 'checkout_session': Uses Stripe Checkout via backend API
     */
    mode: 'payment_links' as DonationMode,

    /**
     * Stripe Payment Links
     * Create these in Stripe Dashboard > Payment Links
     * Replace with your actual links
     */
    paymentLinks: {
        basic: 'https://buy.stripe.com/test_basic', // €20
        solidarity: 'https://buy.stripe.com/test_solidarity', // €50
        institutional: 'https://buy.stripe.com/test_institutional', // €200
        custom: 'https://buy.stripe.com/test_custom', // Variable amount
    },

    /**
     * Success/Cancel redirect URLs
     */
    redirects: {
        success: '/colabora/gracias',
        cancel: '/colabora/cancelado',
    },

    /**
     * Contact email for donation inquiries
     */
    contactEmail: 'colabora@ieam.es',
};

// ============================================
// DONATION TIERS
// ============================================

export const donationTiers: DonationTier[] = [
    {
        id: 'basic',
        title: 'Apoyo Básico',
        amount: 20,
        description: 'Colaboración puntual para apoyar nuestra labor',
        impact: 'Contribuye a la publicación de un artículo de análisis',
        paymentLink: DONATION_CONFIG.paymentLinks.basic,
    },
    {
        id: 'solidarity',
        title: 'Apoyo Solidario',
        amount: 50,
        description: 'Impulsa la investigación independiente',
        impact: 'Financia la creación de una infografía de datos',
        featured: true,
        paymentLink: DONATION_CONFIG.paymentLinks.solidarity,
    },
    {
        id: 'institutional',
        title: 'Apoyo Institucional',
        amount: 200,
        description: 'Respaldo significativo a nuestra misión',
        impact: 'Patrocina un policy brief completo',
        paymentLink: DONATION_CONFIG.paymentLinks.institutional,
    },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get donation URL based on current mode
 */
export function getDonationUrl(tierId: string): string {
    const tier = donationTiers.find((t) => t.id === tierId);

    if (DONATION_CONFIG.mode === 'payment_links') {
        return tier?.paymentLink || DONATION_CONFIG.paymentLinks.custom;
    }

    // Future: Checkout Session mode
    // Will call API to create session and return URL
    console.warn('Checkout session mode not yet implemented');
    return '#';
}

/**
 * Format amount for display
 */
export function formatAmount(amount: number | 'custom'): string {
    if (amount === 'custom') return 'Libre';
    return `€${amount}`;
}
