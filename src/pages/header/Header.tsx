import { useRef, useEffect } from 'react';
import logo from '@/assets/logo.png';

const Header: React.FC = () => {
  const headerImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerImageRef.current) {
        if (window.scrollY >= 100) {
          headerImageRef.current.style.width = '70px';
        } else {
          headerImageRef.current.style.width = '';
        }
      };
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-[100px]">
      <div
        className="border-t-4 border-solid"
        style={{ borderImage: "linear-gradient(90deg, #d32e9d, #8ed6fb 50%, #5d2f86) 1" }}
      />

      <div className="flex flex-row justify-between items-center px-4">
        <a className="hover-rainbow" href="#parallax">
          <img ref={headerImageRef} className="w-[90px] transition-all duration-700" src={logo} alt="" width="100px" />
        </a>

        <div className="flex flex-row gap-4 text-xl text-white">
          <a className="hover-rainbow" href="#content-first">First</a>
          <a className="hover-rainbow" href="#content-second">Second</a>
          <a className="hover-rainbow" href="#content-third">Third</a>
        </div>

        <a className="hover-rainbow" href="https://github.com/Demigoddd" target="_blank">
          <svg
            className="w-12"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
