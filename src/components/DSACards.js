import { dsaData } from '../data/dsaData';
import { useNavigate } from 'react-router-dom';

function DSACards() {
  const navigate = useNavigate();

  return (
    <div className="dsa-container">
      {/* <h2>Data Structures</h2> */}
      <div className="dsa-grid">
        {dsaData.map((item) => (
          <div 
            key={item.id} 
            className="dsa-card"
            style={{ backgroundColor: item.bgcolor }}
            onClick={() => navigate(`/dsa/${item.name}`)}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DSACards; 