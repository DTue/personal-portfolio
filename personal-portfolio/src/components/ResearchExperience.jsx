import image_placeholder from "../assets/image_placeholder.jpg"; 

function ResearchExperience(){
    return(
        <section id="research-experience"className="research-experience-section">
            <h2>Research Experience</h2>

             <div className="research-experience-card">
             <div className="research-experience-content">
                <h3>AI4BusinessLab-AI4Bioethics Project</h3>
                 <p className="research-summary">
                With a focus on AI governance and bioethics, along with graduate researchers, we investigate on how
                the hybrid integration of large language models and Constitutional AI can improve patient experiences while 
                promoting transparency, accountability, and accuracy in healthcare technologies. 
                 </p>
                 <button type="button" className="research-references-button">
                    <a href="https://sites.google.com/sdsu.edu/ai4businessv1/home">AI4BusinessLab</a>
                 </button>
                 </div>
                <img src = {image_placeholder} alt ="placeholder image"/> 
             </div>

             <div className="research-experience-card">
                <img src = {image_placeholder} alt ="placeholder image"/> 
             <div className="research-experience-content"> 
                <h3>San Diego Homeless and Health Equity Research Team - SDHeart</h3>
                 <p className="research-summary">
                 This project addresses the issue of homelessness in a border region 
                 by developing advanced artificial intelligence (AI) 
                 and geospatial techniques to map and analyze the encampments of the unhoused.
                 To gather data develop new GeoAI models, decision support tools, and analytics methods, 
                 we conducted homeless survey and applied computation analysis to analyze the social-environmental determinanats and impacts.
                 </p>
                  <button type="button" className="research-references-button">
                    <a href="https://sdheart.sdsu.edu/">SDHeart</a>
                 </button>
                 </div>
             </div>

             <div className="research-experience-card">
             <div className="research-experience-content"> 
                <h3>SANDI - AI-SMS Low-barrier Communication System</h3>
                 <p className="research-summary">
                    Extending from the SDSU Big Data Hackathon, hosted by SDHeart, I am developing 
                    my project proposal. 
            
                 </p>
                 <button type="button" className="research-references-button">
                    <a href="https://sfalcon3996.wixsite.com/sandi">SANDI</a>
                 </button>
                 </div>
                  <img src = {image_placeholder} alt ="placeholder image"/> 
             </div>


        </section>
    ); 

}export default ResearchExperience; 