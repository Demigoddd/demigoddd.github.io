import image1 from '@/assets/image1.jpg';

const ContentFirst: React.FC = () => {
  return (
    <div id="content-first" className="content" style={{ backgroundImage: `url(${image1})` }}>
      <div className="flex flex-col justify-center items-center">
        <p className="bg-[#060606] text-[#d73d39] text-[32px] text-center p-4 rounded-md">
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
