import './index.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Education from './Components/Education';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
