// app/page.jsx
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import ContactForm from '@/components/sections/ContactForm';
import Facts from '@/components/sections/Facts';
import CaseStudiesSection from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
// import Numbers from '@/components/sections/numbers';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Facts/>
      <Services />
      <CaseStudiesSection/>
      <Testimonials/>
      <Contact/>
      

      
      <Footer />
    </main>
  );
}
