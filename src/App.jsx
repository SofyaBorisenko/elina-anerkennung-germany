import * as React from 'react';
import './App.scss';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}

export default App;
