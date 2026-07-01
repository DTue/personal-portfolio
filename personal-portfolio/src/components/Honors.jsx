const honorsList = [
    {
        id: 1,
        title: "SDSU Dean's List: 2024-2026",
    },
    {
        id: 2,
        title: "SDSU Leadership Certificate",
    },
    {
        id: 3,
        title: "International Student of The Year",
    },
    {
        id: 4,
        title: "Jack Kent Cooke Foundation",
    },
    {
        id: 5,
        title: "CIF All-Academic Scholar Captain",
    },
  
];


function Honors(){
    return(
        <section id="honors" className="honors-section">
            <h2>Honors</h2>
            {honorsList.map((honors) => (
            <p>{honors.title}</p>
            ))}
        </section>
    );

}export default Honors; 