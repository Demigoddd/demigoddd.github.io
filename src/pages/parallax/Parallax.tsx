import { useEffect } from 'react';
import parallax1 from '@/assets/parallax1.png';
import parallax2 from '@/assets/parallax2.png';
import parallax3a from '@/assets/parallax3a.png';
import parallax3b from '@/assets/parallax3b.png';
import parallax4 from '@/assets/parallax4.png';
import parallax5 from '@/assets/parallax5.png';
import parallax6 from '@/assets/parallax6.png';
import parallax7 from '@/assets/parallax7.png';
import parallax8 from '@/assets/parallax8.png';
import parallax9 from '@/assets/parallax9.png';
import parallax10 from '@/assets/parallax10.png';
import './parallax.css';

const Parallax: React.FC = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) return;

    const handleScroll = () => {
      const top = window.scrollY;
      const layers = document.querySelectorAll<HTMLElement>(".parallax");

      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") || "0");
        const yPos = -(top * speed) / 100;
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="parallax" className="panel">
      <div className="panel_layer pixelated" id="layer-1" style={{ backgroundImage: `url(${parallax1})` }}></div>
      <div className="panel_layer pixelated" id="layer-2" style={{ backgroundImage: `url(${parallax2})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-3a" data-speed="15" style={{ backgroundImage: `url(${parallax3a})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-3b" data-speed="15" style={{ backgroundImage: `url(${parallax3b})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-4" data-speed="65" style={{ backgroundImage: `url(${parallax4})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-5" data-speed="70" style={{ backgroundImage: `url(${parallax5})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-6" data-speed="78" style={{ backgroundImage: `url(${parallax6})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-7" data-speed="89" style={{ backgroundImage: `url(${parallax7})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-8" data-speed="100" style={{ backgroundImage: `url(${parallax8})` }}><div id="bird"></div></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-9" data-speed="100" style={{ backgroundImage: `url(${parallax9})` }}></div>
      <div className="panel_layer parallax pixelated parallax-transform" id="layer-10" data-speed="100" style={{ backgroundImage: `url(${parallax10})` }}></div>
      <div className="panel_layer pixelated" id="layer-13" data-speed="100"></div>
      <div className="panel_layer pixelated" id="layer-12" data-speed="100"></div>
    </div>
  );
};

export default Parallax;
