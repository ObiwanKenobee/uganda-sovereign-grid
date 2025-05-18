
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Leaf, Heart, DollarSign, Shield, Globe } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 pattern-bg">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Uganda Sovereign <span className="text-ustg-primary">Tech Grid</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                A secure, extensible, offline-capable platform for sovereign tech infrastructure, empowering Ugandan citizens with digital services across education, agriculture, healthcare, finance, and civic engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onGetStarted} size="lg" className="font-semibold">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-border">
                  <div className="bg-ustg-primary h-2 w-full"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-ustg-primary/10 p-3 rounded-lg">
                        <Shield className="h-6 w-6 text-ustg-primary" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">Connected to 5 modules</p>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sovereign Infrastructure</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Access essential digital services, even with limited connectivity.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
                        <GraduationCap className="h-5 w-5 text-ustg-primary mb-1" />
                        <span className="text-xs">EduGrid</span>
                      </div>
                      <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
                        <Heart className="h-5 w-5 text-ustg-green mb-1" />
                        <span className="text-xs">Health</span>
                      </div>
                      <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
                        <Leaf className="h-5 w-5 text-ustg-blue mb-1" />
                        <span className="text-xs">AgroGrid</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-ustg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-muted-foreground">85% Services Available Offline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Uganda Sovereign Tech Grid is designed to work seamlessly in all environments, from connected urban centers to remote rural areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-ustg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-ustg-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Offline-Capable</h3>
              <p className="text-muted-foreground">
                Access essential services even without internet connectivity through mesh networks and local-first technology.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-ustg-green/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-ustg-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sovereign Infrastructure</h3>
              <p className="text-muted-foreground">
                Built for Uganda, by Ugandans, with data sovereignty and local control at its core.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-ustg-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-ustg-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
              <p className="text-muted-foreground">
                End-to-end encryption, role-based access, and secure authentication protect sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrated Modules</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our platform integrates multiple essential services to serve citizens across all sectors.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="module-card">
              <div className="module-card-header bg-ustg-primary"></div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-ustg-primary flex items-center justify-center text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">EduGrid</h3>
                <p className="text-sm text-muted-foreground mt-1">Digital learning platform with offline capabilities for continuous education.</p>
              </div>
            </div>

            <div className="module-card">
              <div className="module-card-header bg-ustg-green"></div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-ustg-green flex items-center justify-center text-white">
                    <Leaf className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">AgroGrid</h3>
                <p className="text-sm text-muted-foreground mt-1">AI-powered agriculture advisory and support for sustainable farming.</p>
              </div>
            </div>

            <div className="module-card">
              <div className="module-card-header bg-ustg-blue"></div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-ustg-blue flex items-center justify-center text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">HealthPods</h3>
                <p className="text-sm text-muted-foreground mt-1">Rural health diagnostics and AI-assisted care for underserved communities.</p>
              </div>
            </div>

            <div className="module-card">
              <div className="module-card-header bg-ustg-secondary"></div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-ustg-secondary flex items-center justify-center text-white">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">Finance</h3>
                <p className="text-sm text-muted-foreground mt-1">Digital financial services and eUGX subsidy distribution system.</p>
              </div>
            </div>

            <div className="module-card">
              <div className="module-card-header bg-ustg-purple"></div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-ustg-purple flex items-center justify-center text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">CivicCore</h3>
                <p className="text-sm text-muted-foreground mt-1">Digital rights ledger and citizen engagement platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ustg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Digital Transformation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of Uganda's sovereign technology journey. Access services designed for all citizens, regardless of location or connectivity.
          </p>
          <Button onClick={onGetStarted} size="lg" variant="secondary" className="font-semibold">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-lg">Uganda Sovereign Tech Grid</h3>
              <p className="text-sm text-muted-foreground mt-1">Empowering citizens through technology</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div>
                <h4 className="font-semibold mb-3">Modules</h4>
                <ul className="space-y-2 text-sm">
                  <li>EduGrid</li>
                  <li>AgroGrid</li>
                  <li>HealthPods</li>
                  <li>Finance</li>
                  <li>CivicCore</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>Documentation</li>
                  <li>Support</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Uganda Sovereign Tech Grid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
