
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Quote from './components/Quote';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Quote />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;