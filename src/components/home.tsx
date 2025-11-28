import Navigation from './Navigation';
import HeroSection from './HeroSection';
import DashboardCarousel from './DashboardCarousel';
import ImpactMetrics from './ImpactMetrics';
import ResearchListings from './ResearchListings';
import EventsCalendar from './EventsCalendar';
import ExpertProfiles from './ExpertProfiles';
import Footer from './Footer';
import {
  featuredContent,
  dashboardWidgets,
  researchListings,
  upcomingEvents,
  experts,
} from '@/data/mockData';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection content={featuredContent} />
        <DashboardCarousel widgets={dashboardWidgets} />
        <ImpactMetrics />
        <ResearchListings listings={researchListings} />
        <EventsCalendar events={upcomingEvents} />
        <ExpertProfiles experts={experts} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
