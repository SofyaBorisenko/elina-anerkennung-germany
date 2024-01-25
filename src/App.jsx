import * as React from 'react';
import './App.scss';
import { AlertProvider } from './context/alertContext';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import ContactMe from './components/ContactMe.jsx';
import Alert from './components/Alert';

function App() {
  return (
    <main>
      <AlertProvider>
        <main>
          <Header />
          <Hero />
          <AboutMe id='aboutme-section' />
          <Stats />
          <Services id='services-section' />
          <ContactMe id='contactme-section' />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </main>
  );
}

export default App;
