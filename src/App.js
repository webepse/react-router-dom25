import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marques">Liste des marques</Link></li>
        <li><Link to="/marques/alfa">Alfa Romeo</Link></li>
        <li><Link to="/cars">Les voitures</Link></li>
        <li><Link to="/cars/new">Création d'une voiture</Link></li>
        <li><Link to="/cars/Tonale">Alfa Romeo Tonale</Link></li>
      </ul>
    </>
  );
}

export default App;
