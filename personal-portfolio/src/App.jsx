import './App.css'

const projects = [
  "Hackathons",
  "Academic Projects",
  "Media Projects"
]; 


function App() {
  return (

  
    <section> 
      {/* Navigation Bar */}
     <nav class = "navigation">
      <ul>
        <li><a href = "#">Home</a></li>
        <li><a href = "#" >About Me</a></li>
        <li><a href = "#">Projects</a></li>
        <li><a href = "#">Contact</a></li>
      </ul>
     </nav>

     
    <h1>Dolphin's Digital Portfolio</h1>
    <h2>About Me</h2>

    <h2>My Projects</h2>

    { 
    projects.map(project => (
      <p>{project}</p>
    ))
    }

    <h2>Let's Connect</h2>
   </section> 
   
  ); 
}

export default App
