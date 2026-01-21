import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import AlbumsSection from '@/components/AlbumsSection';
import SocialSection from '@/components/SocialSection';
import AchievementSection from '@/components/AchievementSection';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="releases">
        <AlbumsSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="achievements">
        <AchievementSection />
      </section>

      <section id="contact">
        <SocialSection />
      </section>
    </main>
  );
};

export default Index;
