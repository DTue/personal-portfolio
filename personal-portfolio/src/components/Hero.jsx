import image_placeholder from "../assets/image_placeholder.jpg"; 

function Hero() {
    return(
    <section id = "hero" className = "hero-section">


        <div className = "hero-left"> 
            <h2>Hello, my name is Tue Tran</h2>
             <p>
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
             </p>
        </div>

          <div className = "hero-right">
            <img src = {image_placeholder} alt ="placeholder image"> 
            </img>

        </div>

    </section>


    ); 

}export default Hero; 