import { useSelector } from "react-redux";
import DarkModeBtn from "../features/darkMode/DarkModeBtn";
import { RootState } from "../app/store";

const Footer = () => {
  const isDark = useSelector((state: RootState) => state.darkMode.isDark);

  return (
    <footer className="flex flex-col items-start justify-start p-5 space-x-8 space-y-2 bg-black dark:bg-white sm:flex-row">
      <div className="flex flex-col justify-center space-y-2">
        <span className="text-sm text-gray-400">STUDIO_DAYLIGHT Seoul</span>
        <span className="text-sm text-gray-400">
          Business Lincenese_ 515-70-00446
        </span>
        <span className="text-sm text-gray-400">
          Addresss_ 구로구 공원로6다길 14
        </span>
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <span className="text-sm text-gray-400">Korea 대표자_이규호</span>
        <span className="text-sm text-gray-400">Tel_ 010-4659-3752</span>
      </div>
      <div className="flex flex-col items-center justify-between space-y-1">
        <span className="text-xs text-gray-400">
          {isDark ? "Switch to light mode" : "Switch to dark mode"}
        </span>
        <DarkModeBtn />
        <div />
      </div>
    </footer>
  );
};

export default Footer;
/* 
STUDIO_DAYLIGHT Seoul, Korea 대표자_이규호

Business Lincenese_ 515-70-00446 Tel_ 010-4659-3752

Addresss_ 구로구 공원로6다길 14

*/
