import logo from "../assets/temp-logo.webp";
import NaverCafe from "../assets/navercafe.svg?react";

const Header = () => {
  return (
    <header className="flex flex-col items-start justify-between p-5 space-x-2 space-y-2 text-white bg-black dark:text-black dark:bg-white sm:flex-row sm:items-center">
      <img src={logo} width={200} className="w-30" />
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start flex-1 space-x-2">
          <span className="text-lg font-medium transition hover:underline hover:cursor-pointer">
            프로젝트
          </span>
          <span className="text-lg font-medium transition hover:underline hover:cursor-pointer">
            캘린더
          </span>
          <span className="text-lg font-medium transition hover:underline hover:cursor-pointer">
            갤러리
          </span>
          <span className="text-lg font-medium transition hover:underline hover:cursor-pointer">
            FAQ
          </span>
        </div>
        <div className="flex items-center justify-start space-x-2">
          <a
            href="https://www.instagram.com/everydayband_1sbd/"
            target="_blank"
          >
            <i className="text-[30px] font-medium transition fa-brands fa-instagram hover:scale-110"></i>
          </a>
          <a href="https://cafe.naver.com/everydayband" target="_blank">
            <NaverCafe className="transition size-[30px] hover:scale-110 relative -top-1" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
