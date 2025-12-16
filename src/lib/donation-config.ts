/**
 * Donation Configuration
 * 
 * Centralized config for donation system.
 * Currently uses Stripe Payment Links (zero-code).
 * Ready to migrate to Checkout Sessions when backend is available.
 */

export type DonationMode = 'payment_links' | 'checkout_session';
export type DonationFrequency = 'one-time' | 'monthly';

export interface DonationTier {
    id: string;
    title: string;
    amount: number | 'custom';
    description: string;
    impact: string;
    featured?: boolean;
    links: {
        oneTime: string;
        monthly: string;
    };
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
        basic: {
            oneTime: 'https://buy.stripe.com/aFa6oH6sp5sHbEXeoHgfu00',
            monthly: 'https://buy.stripe.com/eVqdR9aIFbR57oHfsLgfu01'
        },
        solidarity: {
            oneTime: 'https://buy.stripe.com/9B628rbMJf3hdN5a8rgfu02',
            monthly: 'https://buy.stripe.com/9B66oH9EBbR5bEX3K3gfu03'
        },
        institutional: {
            oneTime: 'https://buy.stripe.com/28EbJ1eYV5sH7oH80jgfu04',
            monthly: 'https://buy.stripe.com/fZu9ATaIF6wL5gz4O7gfu05'
        },
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
        links: DONATION_CONFIG.paymentLinks.basic,
    },
    {
        id: 'solidarity',
        title: 'Apoyo Solidario',
        amount: 50,
        description: 'Impulsa la investigación independiente',
        impact: 'Financia la creación de una infografía de datos',
        featured: true,
        links: DONATION_CONFIG.paymentLinks.solidarity,
    },
    {
        id: 'institutional',
        title: 'Apoyo Institucional',
        amount: 200,
        description: 'Respaldo significativo a nuestra misión',
        impact: 'Patrocina un policy brief completo',
        links: DONATION_CONFIG.paymentLinks.institutional,
    },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get donation URL based on current mode
 */
export function getDonationUrl(tierId: string, frequency: DonationFrequency = 'one-time'): string {
    const tier = donationTiers.find((t) => t.id === tierId);

    if (DONATION_CONFIG.mode === 'payment_links') {
        if (!tier) return '#';
        return frequency === 'monthly' ? tier.links.monthly : tier.links.oneTime;
    }

    // Future: Checkout Session mode
    // Will call API to create session and return URL
    console.warn('Checkout session mode not yet implemented');
    return '#';
}

/**
 * Format amount for display
 */
export function formatAmount(amount: number | 'custom', frequency: DonationFrequency = 'one-time'): string {
    if (amount === 'custom') return 'Libre';
    const suffix = frequency === 'monthly' ? '/mes' : '';
    return `€${amount}${suffix}`;
}
