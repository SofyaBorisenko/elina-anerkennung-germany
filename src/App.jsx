import * as React from 'react';
import './App.scss';
import { AlertProvider } from './context/alertContext';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Benefits from './components/Benefits.jsx';
import OnlineConsultation from './components/OnlineConsultation.jsx';
import ContactMe from './components/ContactMe.jsx';
import Alert from './components/Alert';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <main>
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Header />
            <Hero />
            <AboutMe id='aboutme-section' />
            <Stats />
            <Services id='services-section' />
            <Benefits />
            <OnlineConsultation id='consultation-section' />
            <ContactMe id='contactme-section' />
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
    </main>
  );
}

export default App;
