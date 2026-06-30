import image_placeholder from "../assets/image_placeholder.jpg"; 
import {useState} from 'react'; 

const projectCategory = ["All", "Software", "Media"];
const projects = [
  {
  id: 1,
  category: "Software",
  title: "DARK",
  role: "Lead Developer",
  description: "Privacy-first AI SMS system connecting unhoused individuals with community resources.",
  note: "1st Place for San Diego Big Data Hackathon", 
  image: image_placeholder,
  project_link: "https://cal.sdsu.edu/news/hackathon-2025",
  },
  {
    id: 2,
    category: "Software",
    title: "MP3ME",
    role: "Full-Stack Developer",
    description: "Local music service application built with C++  C++ using TagLib and SFML libraries with core data structures.",
    image: image_placeholder,
    project_link: "#",
  },
  {
    id: 3,
    category: "Software",
    title: "FireLink",
    role: "System Developer",
    description: "An SMS-powered community intelligence system for crisis response coordination during wildfires",
    note: "1st Place for United Nation - UCSD Reboot The Earth Hackathon", 
    image: image_placeholder,
    project_link: "https://idea.unite.un.org/servlet/hype/IMT?documentTableId=1639349974164781605&userAction=Browse&templateName=&documentId=d7e5632f59d38b93ce54cd0e2f184db4",
    github_link: "https://github.com/alexziao05/firelink",
  },
  {
    id: 4,
    category: "Software",
    title: "Weave Our Tapestry",
    role: "Project Lead",
    description: "A  a multicultural storytelling platform",
    note: "", 
    image: image_placeholder,
    project_link: "",
    github_link: "https://github.com/PaullyScripter/weave-our-tapestry",
  }, 
  {
    id: 5,
    category: "Software",
    title: "MARS-MASHUP",
    role: "Open-source Developer",
    description: "An extended MARS MIPS Assembler (Java) with 32-bit audio-themed Instruction Set Architecture (ISA)",
    note: "Honorable Mention for E-Lit Competition", 
    image: image_placeholder,
    project_link: "", 
    github_link: "https://github.com/DTue/MARS-MASHUP",
  }, 
  {
    id: 6,
    category: "Software",
    title: "SDSU SmartMatch",
    role: "Project Lead",
    description: "A connection framework linking notes hub and real-time study sessions to enhance  academic collaboration via Figma",
    note: "", 
    image: image_placeholder,
    project_link: "", 
    github_link: "",
  }, 
   {
    id: 7,
    category: "Software",
    title: "AztecSync",
    role: "Frontend Developer",
    description: "An interactive GIS-based campus navigation interface using HTML/CSS",
    note: "", 
    image: image_placeholder,
    project_link: "", 
    github_link: "",
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
                        <button className ="project-link" type="button" > <a href={project.project_link}>View More</a> </button>
                        <p className="project-note">{project.note}</p>
                    </div>
                ))}
             </div> 

        </section>

    );

}export default Projects; 