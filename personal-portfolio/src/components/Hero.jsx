import image_placeholder from "../assets/image_placeholder.jpg"; 

function Hero() {
    return(
    <section id = "hero" className = "hero-section">


        <div className = "hero-left"> 
            <h1>Hello, my name is Tue Tran</h1>
        </div>

          <div className = "hero-right">
            <img src = {image_placeholder} alt ="placeholder image"> 
            </img>

        </div>

    </section>


    ); 

}export default Hero; 