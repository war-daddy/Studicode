import { webdevData } from '../data/webdevData';

function WebDevCards() {
  return (
    <div className="webdev-container">
      {/* <h2>Web Development</h2> */}
      <div className="webdev-grid">
        {webdevData.map((item) => (
          <div 
            key={item.id} 
            className="webdev-card"
            style={{ backgroundImage: item.bgcolor }}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebDevCards; 