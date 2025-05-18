
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthScreen from '@/components/auth/AuthScreen';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Dashboard from './Dashboard';
import EduGrid from '@/components/modules/EduGrid';
import AgroGrid from '@/components/modules/AgroGrid';
import HealthPods from '@/components/modules/HealthPods';
import Finance from '@/components/modules/Finance';
import CivicCore from '@/components/modules/CivicCore';
import LandingPage from './LandingPage';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Index = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const navigate = useNavigate();
  
  // Check if user is on a specific route
  useEffect(() => {
    const path = window.location.pathname;
    if (authenticated && path === '/') {
      navigate('/dashboard');
    }
  }, [authenticated, navigate]);
  
  const handleLogin = () => {
    setAuthenticated(true);
    navigate('/dashboard');
  };
  
  const handleLogout = () => {
    setAuthenticated(false);
    navigate('/');
  };

  const handleGetStarted = () => {
    setShowLanding(false);
  };
  
  if (!authenticated) {
    if (showLanding) {
      return (
        <>
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': 'Uganda Sovereign Tech Grid',
                'url': 'https://ustg.ug',
                'logo': 'https://ustg.ug/logo.png',
                'sameAs': [
                  'https://twitter.com/USTG_Uganda',
                  'https://facebook.com/USTGUganda',
                  'https://linkedin.com/company/uganda-sovereign-tech-grid'
                ],
                'description': 'A secure, extensible, offline-capable platform for sovereign tech infrastructure, empowering Ugandan citizens with digital services.'
              })}
            </script>
          </Helmet>
          <LandingPage onGetStarted={handleGetStarted} />
        </>
      );
    }
    return <AuthScreen onAuth={handleLogin} />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout onLogout={handleLogout} />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/edu-grid" element={<EduGrid />} />
        <Route path="/dashboard/agrogrid" element={<AgroGrid />} />
        <Route path="/dashboard/healthpods" element={<HealthPods />} />
        <Route path="/dashboard/finance" element={<Finance />} />
        <Route path="/dashboard/civic-core" element={<CivicCore />} />
        <Route path="/dashboard/tech-hub" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Index;
