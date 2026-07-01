
const activity_category = ["All", "Leadership", "Service", "Multimedia", "STEM"];

const activity_list = [
    {
        id: 1,
        category: "Leadership", 
        title: "Student Ambassador",
        program_name: "SDSU Global Perspective Symposium",
        description: "Research and deliver specialized presentations about diverse cultural topics(cultural adaptation, global health, international business, big data, and more) to +1217 students",
        start_date: "September 2024",
        end_date: "Present", 
        program_link: "#",
    },
    {
        id: 2,
        category: "Leadership", 
        title: "Launch Into Leadership Cohort",
        program_name: "SDSU Glazer Center for Leadership and Service",
        description: "Lead 10+ professional workshops on Leadership Theory, Time Management, Values and Vision, True Color, and Burnout in Leadership to student body",
        start_date: "August 2025",
        end_date: "Present", 
        program_link: "#",
    },
    {
        id: 3,
        category: "Service", 
        title: "Volunteer as Head of Media",
        program_name: "Non-profit Organization Peony Project",
        description: "In season 1 (2023), we raised 16M+ VND for elderly households residing in Vietnam's rural areas. Leading the media team, I produced digital presence across multiple platforms, increased 7x social interations, and designed 33+ visualizations. We designed campaign promotions for fundrasing and securing partnerships.",
        start_date: "June 2023",
        end_date: "June 2024", 
        program_link: "https://www.facebook.com/peonyproject2023",
    },
    {
        id: 4,
        category: "Multimedia",
        title: "Editor-in-chief",
        program_name: "The Rock Academy Yearbook Team",
        description: "Leading the team of 20+ members, we designed layouts and captured student moments into long-lasting memorable yearbooks. With a passion for multimedia production, I produced 20+ videos, managed 3 media platforms, and was the first Rock Academy student to direct a 9-month videography documentary, capturing the 2023-2024 academic year for premier at the Academy Award Commencement. Our team consecutively received Gold(2023-2024) and Silver(2022) Level National Yearbook Excellence.", 
        start_date: "August 2022",
        end_date: "May 2024",
        program_link: "#", 
    },
    {
        id: 5,
        category: "Multimedia",
        title: "Editor-in-chief",
        program_name: "The Rock Academy Yearbook Team",
        description: "Leading the team of 20+ members, we designed layouts and captured student moments into long-lasting memorable yearbooks. With a passion for multimedia production, I produced 20+ videos, managed 3 media platforms, and was the first Rock Academy student to direct a 9-month videography documentary, capturing the 2023-2024 academic year for premier at the Academy Award Commencement. Our team consecutively received Gold(2023-2024) and Silver(2022) Level National Yearbook Excellence.", 
        start_date: "August 2022",
        end_date: "May 2024",
        program_link: "#", 
    },
    {
        id: 6,
        category: "STEM",
        title: "Controls Software",
        program_name: "SDSU Aztec Electric Racing",
        description: "", 
        start_date: "March 2026",
        end_date: "Present",
        program_link: "#", 
    },
    {
        id: 7,
        category: "STEM",
        title: "Pathway Program Member",
        program_name: "Girls Who Code",
        description: "Earned Certificate of Completions: JavaScript, HTML/CSS, Cybersecurity, and Web Design", 
        start_date: "July 2023",
        end_date: "August 2023",
        program_link: "#", 
    },
    {
        id: 7,
        category: "Leadership",
        title: "Peer Mentor",
        program_name: "Conversation Buddies with SDSU American Language Institute(ALI)",
        description: "Facilitate English conversations for international students, adapting communication styles to support linguistic and cultural integration", 
        start_date: "January 2024", 
        end_date: "May 2026",
        program_link: "#", 
    },
   
  
];





function Involvements(){
    return(
        <section id="leadership-service-and-involvements" className="leadership-service-and-involvements-section">
            <h2>Leadership, Service and Involvements Section</h2>
            {activity_list.map((activity) => (
                <div className="activity-section"> 
               <p className="activity-category-title">{activity.category} - {activity.title}</p>
                <h3>{activity.program_name}</h3>
                <p className ="activity-date">{activity.start_date} - {activity.end_date}</p>
                <p className="activity-description">{activity.description}</p>
                <button type="button"><a href={activity.program_link}>More Information</a></button>
               </div>
            ))}

        </section>
    );

}export default Involvements; 