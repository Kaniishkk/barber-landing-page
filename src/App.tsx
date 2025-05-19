import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingBanner from './components/BookingBanner';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <BookingBanner />
      <Services />
      <About />
      <Gallery />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;