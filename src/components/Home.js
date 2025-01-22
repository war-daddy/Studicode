import bgImage from './bg1.webp';
import SocialStrip from './SocialStrip';
import DSACards from './DSACards';
import WebDevCards from './WebDevCards';
import InterviewCards from './InterviewCards';

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
      </div>
    </>
  );
}

export default Home; 