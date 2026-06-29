import image_placeholder from "../assets/image_placeholder.jpg"; 

function ResearchExperience(){
    return(
        <section className="research-experience-section">
            <h2>Research Experience</h2>

             <div className="research-experience-card">
             <div className="research-experience-content">
                <h3>AI4BusinessLab</h3>
                 <p className="research-summary">
                Researching Constitutional AI, digital pharmacy, and ethical AI systems.
                 </p>
                 </div>
                <img src = {image_placeholder} alt ="placeholder image"/> 
             </div>
             <div className="research-experience-card">
                <img src = {image_placeholder} alt ="placeholder image"/> 
             <div className="research-experience-content"> 
                <h3>San Diego Homeless and Health Equity Research Team - SDHeart</h3>
                 <p className="research-summary">
                 Applying computational and geospatial analysis to study homelessness and public health equity.
                 </p>
                 </div>
             </div>


        </section>
    ); 

}export default ResearchExperience; 