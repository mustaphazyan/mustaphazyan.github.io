import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ArtistsSection from '@/components/ArtistsSection';
import StatisticsSection from '@/components/StatisticsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * ZAHRAOUI PROD - Music Distribution Platform
 * 
 * Design Philosophy:
 * - Professional and modern aesthetic
 * - Deep blue (#1e40af) as primary color with amber (#fbbf24) accents
 * - RTL layout for Arabic content
 * - Responsive design for all devices
 * - Smooth transitions and hover effects
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ArtistsSection />
      <StatisticsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
