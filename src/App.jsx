import * as React from 'react';
import './App.scss';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Stats />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
