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
    annualAmount?: number; // New field for annual pricing
    description: string;
    impact: string;
    featured?: boolean;
    links: {
        oneTime: string;
        monthly: string;
        annual: string;
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
            oneTime: 'https://buy.stripe.com/00wfZh8gc55UbjF8Lb18c02',
            monthly: 'https://buy.stripe.com/eVqaEX6849mabjF2mN18c01',
            annual: 'https://buy.stripe.com/5kQaEX2VSgOC9bx9Pf18c00'
        },
        solidarity: {
            oneTime: 'https://buy.stripe.com/14A28raok9ma4VhgdD18c05',
            monthly: 'https://buy.stripe.com/fZucN57c855UcnJ1iJ18c04',
            annual: 'https://buy.stripe.com/8x2dR9aok7e29bx9Pf18c03'
        },
        institutional: {
            oneTime: 'https://buy.stripe.com/dRm6oHbsodCq1J50eF18c08',
            monthly: 'https://buy.stripe.com/aFa14n8gccym5Zl3qR18c07',
            annual: 'https://buy.stripe.com/3cI7sL2VSaqecnJ1iJ18c06'
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
        annualAmount: 200, // 20 * 10 (2 months free)
        description: 'Colaboración puntual para apoyar nuestra labor',
        impact: 'Contribuye a la publicación de un artículo de análisis',
        links: DONATION_CONFIG.paymentLinks.basic,
    },
    {
        id: 'solidarity',
        title: 'Apoyo Solidario',
        amount: 50,
        annualAmount: 500, // 50 * 10 (2 months free)
        description: 'Impulsa la investigación independiente',
        impact: 'Financia la creación de una infografía de datos',
        featured: true,
        links: DONATION_CONFIG.paymentLinks.solidarity,
    },
    {
        id: 'institutional',
        title: 'Apoyo Institucional',
        amount: 200,
        annualAmount: 2000, // 200 * 10 (2 months free)
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
export function getDonationUrl(tierId: string, frequency: DonationFrequency | 'annual' = 'one-time'): string {
    const tier = donationTiers.find((t) => t.id === tierId);

    if (DONATION_CONFIG.mode === 'payment_links') {
        if (!tier) return '#';
        if (frequency === 'annual') return tier.links.annual;
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
