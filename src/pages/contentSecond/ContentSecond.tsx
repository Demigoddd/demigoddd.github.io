import image2 from '@/assets/image2.jpg';

const ContentSecond: React.FC = () => {
  return (
    <div id="content-second" className="content justify-start!" style={{ backgroundImage: `url(${image2})` }}>
      <div>
        <p className="bg-[linear-gradient(180deg,_#00aaff,_#ffffff4f)] text-[32px] p-4 mb-4 rounded-[7px]">Fortes fortuna adiuvat..</p>
        <button className="content-button hover-rainbow">Click Me!</button>
      </div>
    </div>
  );
};

export default ContentSecond;
