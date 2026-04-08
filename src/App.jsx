import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

import Contact from './components/Contact/Contact';
import Chatbot from './components/Chatbot/Chatbot';
import Footer from './components/Footer/Footer';
import './App.css'; // You can remove this line if App.css is no longer needed

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />

        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
