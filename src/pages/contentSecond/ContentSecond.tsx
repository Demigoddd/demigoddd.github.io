import image2 from '@/assets/image2.jpg';
import './contentSecond.css';

const ContentSecond: React.FC = () => {
  return (
    <div id="content-second" style={{ backgroundImage: `url(${image2})` }}>
      <div>
        <p className="content-second-text">Fortes fortuna adiuvat..</p>
        <button className="content-second-button">Click Me!</button>
      </div>
    </div>
  );
};

export default ContentSecond;
