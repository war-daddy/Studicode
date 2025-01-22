import { interviewData } from '../data/interviewData';

function InterviewCards() {
  return (
    <div className="interview-container">
      {/* <h2>Interview Preparation</h2> */}
      <div className="interview-grid">
        {interviewData.map((item) => (
          <div 
            key={item.id} 
            className="interview-card"
            style={{ backgroundImage: item.bgcolor }}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewCards; 