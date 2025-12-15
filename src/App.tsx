
import Home from './components/home';
import EventsPage from './pages/EventsPage';
import ResearchPage from './pages/ResearchPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import EventPage from './pages/EventPage';
import LegalPage from './pages/LegalPage';
import CookiesPage from './pages/CookiesPage';
import PrivacyPage from './pages/PrivacyPage';
import CollaboratePage from './pages/CollaboratePage';
import DonationSuccess from './pages/DonationSuccess';
import DonationCancel from './pages/DonationCancel';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/eventos-y-actualidad" element={<EventsPage />} />
      <Route path="/investigacion" element={<ResearchPage />} />
      <Route path="/analisis/:slug" element={<ArticlePage />} />
      <Route path="/eventos/:slug" element={<EventPage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/colabora" element={<CollaboratePage />} />
      <Route path="/colabora/gracias" element={<DonationSuccess />} />
      <Route path="/colabora/cancelado" element={<DonationCancel />} />
      {/* Fallback/Redirect/Direct access for demo purposes */}
      <Route path="/articulo-ejemplo" element={<Navigate to="/analisis/movilidad-africa-europa" replace />} />
    </Routes>
  );
}

export default App;
