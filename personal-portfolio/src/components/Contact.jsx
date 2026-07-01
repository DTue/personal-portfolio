
const contact_link = [
    {
        id: 1,
        name: "Linkedin", 
        link: "https://www.linkedin.com/in/tue-tran-dt/",
    },
    {
        id: 2,
        name: "Media Portfolio", 
        link: "https://dpdolphint.wixsite.com/tuetran",
    },
    {
        id: 3,
        name: "Instagram Media", 
        link: "https://www.instagram.com/dp.dolphint/",
    },
    {
        id: 4,
        name: "Email",
        link:"dtran5824@sdsu.edu", 
    }
]; 


function Contact(){
    return(
        <section id="contact" className="contact-section">
            {contact_link.map((contact) => (
                <button type="button" className="contact-button">
                <a href ={contact.link}>{contact.name}</a>
                </button> 
            ))}
        </section>
    )
   
}export default Contact; 