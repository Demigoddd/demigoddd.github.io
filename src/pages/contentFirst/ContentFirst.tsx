import image1 from '@/assets/image1.jpg';
import './contentFirst.css';

const ContentFirst: React.FC = () => {
  return (
    <div id="content-first" style={{ backgroundImage: `url(${image1})` }}>
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="bg-[#060606] text-[#d73d39] text-[32px] text-center p-4 mb-4 rounded-md">
          No Risk No Reward
          <br />
          but..
          <br />
          Play For Fun!
        </p>
      </div>
    </div>
  );
};

export default ContentFirst;
