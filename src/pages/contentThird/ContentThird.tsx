import image3 from '@/assets/image3.jpg';

const ContentThird: React.FC = () => {
  return (
    <div id="content-third" className="content" style={{ backgroundImage: `url(${image3})` }}>
      <span className="bg-[linear-gradient(180deg,_#fff,_#ffffff4f)] text-[32px] p-4 mb-4 rounded-[7px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </div>
  );
};

export default ContentThird;
