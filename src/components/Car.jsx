import { useParams } from "react-router-dom";

const Car = () => {
    let { model } = useParams()
    return ( 
        <h1>Bienvenu sur le modèle: {model}</h1>
     );
}
 
export default Car;