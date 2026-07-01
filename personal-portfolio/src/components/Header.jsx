//This file is for page header 
function Header(){
    return( 

    <header className="header-section">
    {/* Navigation Bar */}
     <nav className = "navigation">
      <ul className = "navigation-list">
        <li><a href = "#">Home</a></li>
        <li><a href = "#hero" >About Me</a></li>
        <li><a href = "#experience-menu">Experience</a></li>
        <li><a href = "#footer">Contact</a></li>
      </ul>
     </nav>
     
    </header> 

    );
}

export default Header; 
