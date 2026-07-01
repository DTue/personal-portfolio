import my_portrait from "../assets/my_portrait.jpg";  
import Contact from './Contact';

function Hero() {
    return(
    <section id = "hero" className = "hero-section">


        <div className = "hero-left"> 
            <h1>Tue "Dolphin" Tran</h1>
               <Contact/>
        </div>

          <div className = "hero-right">
            <img src = {my_portrait} alt ="portrait"> 
            </img>
        </div>

    </section>


    ); 

}export default Hero; 