import { getImageUrl } from './utils.js';
import { scientists } from './data.js';
import './App.css'; 
// ----------------------------------------------------
function ScientistCard({ scientist }) {
 
  const awardItems = scientist.awards.map(award =>
    <li key={award}>
      {award}
    </li>
  );

  return (
    <div className="card" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{scientist.name}</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        
        {getImageUrl}
        <img
          src={getImageUrl(scientist)}
          alt={scientist.name}
          width={100}
          height={100}
          style={{ marginRight: '15px', borderRadius: '50%' }}
        />
        
        { }
        <div>
          <ul>
            <li><strong>Profesión:</strong> {scientist.profession}</li>
            <li>
              <strong>Premios:</strong> {scientist.awards.length} ({awardItems})
            </li>
            <li><strong>Descubrió:</strong> {scientist.discovered}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default function App() {
  
  const listItems = scientists.map(scientist =>
    
    <ScientistCard key={scientist.id} scientist={scientist} />
  );

  return (
    <>
      {<title>Ejercicio Final - Guía 5</title>}
      <h1>Científicos Notables</h1>
      
      {}
      <div className="list-container">
        {listItems}
      </div>
    </>
  );
}

