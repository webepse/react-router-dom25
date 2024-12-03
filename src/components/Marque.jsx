import { useParams } from "react-router-dom";

const Marque = () => {
    let { name } = useParams()
    return ( 
        <h1>Bienvenu sur la marque: {name}</h1>
     );
}
 
export default Marque;