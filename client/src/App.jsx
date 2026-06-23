import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Page from './components/Page.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import IndustriesPage from './pages/IndustriesPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--white)' }}>
      <ScrollToTop />
      <Navigation />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Page><HomePage /></Page>} />
          <Route path="/about" element={<Page><AboutPage /></Page>} />
          <Route path="/services" element={<Page><ServicesPage /></Page>} />
          <Route path="/industries" element={<Page><IndustriesPage /></Page>} />
          <Route path="/projects" element={<Page><ProjectsPage /></Page>} />
          <Route path="/contact" element={<Page><ContactPage /></Page>} />
          <Route path="*" element={<Page><NotFoundPage /></Page>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}