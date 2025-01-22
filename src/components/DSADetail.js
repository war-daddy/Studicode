import { useParams } from 'react-router-dom';
import { dsaDetailData } from '../data/dsaDetailData';

function DSADetail() {
  const { name } = useParams();
  const data = dsaDetailData[name];

  if (!data) {
    return <div className="detail-container">Topic not found</div>;
  }

  return (
    <div className="detail-container">
      <h1>{data.title}</h1>
      
      <section className="detail-section">
        <h2>Description</h2>
        <p>{data.description}</p>
      </section>

      <section className="detail-section">
        <h2>Time Complexity</h2>
        <div className="complexity-grid">
          <div className="complexity-item">
            <span>Access:</span> {data.timeComplexity.access}
          </div>
          <div className="complexity-item">
            <span>Search:</span> {data.timeComplexity.search}
          </div>
          <div className="complexity-item">
            <span>Insertion:</span> {data.timeComplexity.insertion}
          </div>
          <div className="complexity-item">
            <span>Deletion:</span> {data.timeComplexity.deletion}
          </div>
        </div>
      </section>

      <div className="detail-grid">
        <section className="detail-section">
          <h2>Advantages</h2>
          <ul>
            {data.advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Disadvantages</h2>
          <ul>
            {data.disadvantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="detail-section">
        <h2>Applications</h2>
        <ul>
          {data.applications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section code-section">
        <h2>Code Example</h2>
        <pre>
          <code>{data.codeExample}</code>
        </pre>
      </section>
    </div>
  );
}

export default DSADetail; 