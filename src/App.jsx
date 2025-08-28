import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BenchmarkSection from './components/BenchmarkSection.jsx';
import MethodologySection from './components/MethodologySection.jsx';
import Footer from './components/Footer.jsx';

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
