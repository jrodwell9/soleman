import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

function Landing() {
  return (
    <div className="landing">
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}

export default Landing;