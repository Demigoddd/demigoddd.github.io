import image3 from '@/assets/image3.jpg';
import './contentThird.css';

const ContentThird: React.FC = () => {
  return (
    <div id="content-third" style={{ backgroundImage: `url(${image3})` }}>
      <span className="content-third-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </div>
  );
};

export default ContentThird;
