//This is the main file for compiling all components
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import ResearchExperience from './components/ResearchExperience'
import Presentations from './components/Presentations'
import ProfessionalExperience from './components/ProfessionalExperience'
import Projects from './components/Projects';
import Honors from './components/Honors'; 
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <> 
      <Header/>
      <Hero/>
      <About/>
      <Menu/>
      <ResearchExperience/>
      <Presentations/>
      <ProfessionalExperience/>
      <Projects/>
      <Honors/> 
    

    </>
   
  ); 
}

export default App
