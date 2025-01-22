import bgImage from './bg1.webp';
import SocialStrip from './SocialStrip';
import DSACards from './DSACards';
import WebDevCards from './WebDevCards';
import InterviewCards from './InterviewCards';
import InteractiveLearning from './InteractiveLearning';

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
        </div>
        <SocialStrip />
        <DSACards />
        <WebDevCards />
        <InterviewCards />
        <InteractiveLearning />
      </div>
    </>
  );
}

export default Home; 