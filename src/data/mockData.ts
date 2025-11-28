// Mock data for the IEAM platform

export interface ContentPackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  type: 'policy-paper' | 'research' | 'report' | 'analysis';
  region: string[];
  theme: string[];
}

export interface DashboardWidget {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'webinar' | 'conference' | 'workshop' | 'seminar';
  location: string;
  description: string;
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  image: string;
  bio: string;
}

export const featuredContent: ContentPackage = {
  id: '1',
  title: 'Mali-Europe Mobility Corridors',
  subtitle: 'Understanding Migration Patterns and Policy Implications',
  description: 'An in-depth analysis of migration flows between Mali and Europe, examining policy frameworks, socioeconomic drivers, and recommendations for sustainable mobility governance.',
  image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80',
  tags: ['Migration Policy', 'West Africa', 'EU Relations'],
  date: '2024-01-15',
  type: 'policy-paper',
  region: ['West Africa', 'Europe'],
  theme: ['Migration Governance', 'Policy Analysis']
};

export const dashboardWidgets: DashboardWidget[] = [
  {
    id: '1',
    title: 'Active Research Projects',
    value: '24',
    change: '+3 this month',
    trend: 'up',
    description: 'Ongoing migration research initiatives'
  },
  {
    id: '2',
    title: 'Policy Recommendations',
    value: '156',
    change: '+12 this quarter',
    trend: 'up',
    description: 'Evidence-based policy suggestions'
  },
  {
    id: '3',
    title: 'Data Points Analyzed',
    value: '2.4M',
    change: '+340K this year',
    trend: 'up',
    description: 'Migration data entries processed'
  },
  {
    id: '4',
    title: 'Partner Organizations',
    value: '48',
    change: '+5 new partners',
    trend: 'up',
    description: 'Collaborative research networks'
  }
];

export const researchListings: ContentPackage[] = [
  {
    id: '2',
    title: 'Mediterranean Migration Trends 2024',
    subtitle: 'Annual Report on Cross-Mediterranean Mobility',
    description: 'Comprehensive analysis of migration patterns across the Mediterranean, including route analysis, demographic data, and policy recommendations.',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80',
    tags: ['Mediterranean', 'Annual Report', 'Data Analysis'],
    date: '2024-01-10',
    type: 'report',
    region: ['Mediterranean', 'North Africa'],
    theme: ['Migration Trends', 'Data Analysis']
  },
  {
    id: '3',
    title: 'Climate-Induced Migration in the Sahel',
    subtitle: 'Environmental Drivers of Human Mobility',
    description: 'Examining the relationship between climate change, environmental degradation, and migration patterns in the Sahel region.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    tags: ['Climate Migration', 'Sahel', 'Environmental Policy'],
    date: '2023-12-20',
    type: 'research',
    region: ['Sahel', 'West Africa'],
    theme: ['Climate Change', 'Environmental Migration']
  },
  {
    id: '4',
    title: 'Labor Migration and Economic Development',
    subtitle: 'Impact Assessment of Remittances in Origin Countries',
    description: 'Analysis of how labor migration and remittances contribute to economic development in countries of origin.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['Labor Migration', 'Economic Impact', 'Remittances'],
    date: '2023-12-05',
    type: 'analysis',
    region: ['Global', 'Africa'],
    theme: ['Economic Development', 'Labor Mobility']
  },
  {
    id: '5',
    title: 'Youth Migration Aspirations in West Africa',
    subtitle: 'Understanding the Drivers of Youth Mobility',
    description: 'Survey-based research on migration aspirations among young people in West African countries.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    tags: ['Youth Migration', 'Survey Research', 'West Africa'],
    date: '2023-11-28',
    type: 'research',
    region: ['West Africa'],
    theme: ['Youth Mobility', 'Social Research']
  },
  {
    id: '6',
    title: 'Border Management and Human Rights',
    subtitle: 'Balancing Security and Protection',
    description: 'Policy analysis on border management practices and their impact on migrant rights and protection.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    tags: ['Border Management', 'Human Rights', 'Policy'],
    date: '2023-11-15',
    type: 'policy-paper',
    region: ['Europe', 'Africa'],
    theme: ['Border Policy', 'Human Rights']
  }
];

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Migration Policy Forum 2024',
    date: '2024-03-15',
    type: 'conference',
    location: 'Brussels, Belgium',
    description: 'Annual gathering of policymakers, researchers, and practitioners to discuss migration governance.'
  },
  {
    id: '2',
    title: 'Data-Driven Migration Research Workshop',
    date: '2024-02-28',
    type: 'workshop',
    location: 'Online',
    description: 'Hands-on workshop on using data analytics for migration research.'
  },
  {
    id: '3',
    title: 'Climate Migration Webinar Series',
    date: '2024-02-20',
    type: 'webinar',
    location: 'Online',
    description: 'Monthly webinar series exploring the intersection of climate change and human mobility.'
  },
  {
    id: '4',
    title: 'Mediterranean Dialogue Summit',
    date: '2024-04-10',
    type: 'conference',
    location: 'Barcelona, Spain',
    description: 'High-level dialogue on Mediterranean migration and cooperation.'
  }
];

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Dr. Amina Diallo',
    role: 'Senior Research Fellow',
    expertise: ['Migration Policy', 'West Africa', 'Gender & Migration'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amina',
    bio: 'Leading expert on West African migration patterns with 15+ years of field research experience.'
  },
  {
    id: '2',
    name: 'Prof. Marco Rossi',
    role: 'Director of Mediterranean Studies',
    expertise: ['Mediterranean Migration', 'EU Policy', 'Border Management'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
    bio: 'Specialist in EU migration policy and Mediterranean mobility governance.'
  },
  {
    id: '3',
    name: 'Dr. Fatima Hassan',
    role: 'Climate Migration Researcher',
    expertise: ['Climate Change', 'Environmental Migration', 'Sahel Region'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
    bio: 'Expert on climate-induced migration and environmental displacement in the Sahel.'
  },
  {
    id: '4',
    name: 'Dr. Jean-Pierre Dubois',
    role: 'Data Analytics Lead',
    expertise: ['Data Science', 'Migration Statistics', 'Predictive Modeling'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean',
    bio: 'Pioneering the use of advanced analytics in migration research and forecasting.'
  }
];
