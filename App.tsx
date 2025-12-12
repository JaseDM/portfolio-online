import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';
import { useTheme } from './hooks/useTheme';
import { Theme } from './types';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 relative`}>
      {/* Pass theme to background so it renders the base gradient BEHIND the shapes */}
      <ParallaxBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex flex-col relative z-0">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;