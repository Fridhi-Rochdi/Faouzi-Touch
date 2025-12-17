import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
