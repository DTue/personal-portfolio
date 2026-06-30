import image_placeholder from "../assets/image_placeholder.jpg"; 
import {useState} from 'react'; 


const projectCategory = ["All", "Software", "Academic", "Media"];
const projects = [
  {
  id: 1,
  category: "Software",
  title: "DARK",
  role: "Lead Developer",
  description: "Privacy-first AI SMS system connecting unhoused individuals with community resources.",
  image: image_placeholder,
  project_link: "#",
  },
  {
    id: 2,
    category: "Academic",
    title: "MP3ME",
    role: "Full-Stack Developer",
    description: "Local music service application built with C++ data structures.",
    image: image_placeholder,
    project_link: "#",
  },
  {
    id: 3,
    category: "Media",
    title: "Jumbotron Media Showcase",
    role: "Digital Communication Specialist",
    description: "Large-scale athletic media production for SDSU Women’s Basketball.",
    image: image_placeholder,
    project_link: "#",
  }
];



function Projects(){

    const [selectedCategory, setSelectedCategory] = useState("All"); 
    const filteredProjects = selectedCategory === "All" 
                        ? projects
                        : projects.filter((project) =>  project.category === selectedCategory);  

    return(
        <section id="projects" className="projects-section">
            <h2>Projects Section</h2>
            <ul className="project-category-navigation">
                {projectCategory.map((category) => (
                  <button type="button" 
                        className=
                        {selectedCategory === projectCategory ? "category-button-active": "category-button-inactive"}
                        onClick={() => setSelectedCategory(category)}>
                        {category} 
                        </button> 
                  ))}
            </ul>
 
            <div className="project-slideshow-section">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={`\${project.title} preview`}/>
                        <p className="project-category">{project.category}</p>
                        <h3>{project.title}</h3>
                        <p className="project-role">{project.role}</p>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
             </div> 

        </section>

    );

}export default Projects; 