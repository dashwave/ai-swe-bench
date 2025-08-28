import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BenchmarkSection from './components/BenchmarkSection';
import MethodologySection from './components/MethodologySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <BenchmarkSection />
        <MethodologySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
