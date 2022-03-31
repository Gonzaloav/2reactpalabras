

function Palabras({texto}) {
    
    const palabrasArry = texto.split(" ");
    const palabrasFiltradas = palabrasArry.filter (
        String => String !==""&& String!=="/n"
    );
    const palabras = palabrasFiltradas.length;

        return (
            <h3> Total palabras: {palabras}</h3>
        );    
    }
    
    export default Palabras