import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SchoolsPage from './pages/SchoolsPage';
import DevelopersPage from './pages/DevelopersPage';
import BusinessesPage from './pages/BusinessesPage';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;