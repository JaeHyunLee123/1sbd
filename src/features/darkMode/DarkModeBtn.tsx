import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import { changeDarkMode } from "./darkModeSlice";

const DarkModeBtn = () => {
  const isDark = useSelector((state: RootState) => state.darkMode.isDark);
  const dispatch = useDispatch();

  return (
    <button
      className="relative bg-transparent border-2 border-white rounded-full hover:cursor-pointer w-14 h-7 dark:border-black focus:outline-0"
      onClick={() => {
        dispatch(changeDarkMode(!isDark));
      }}
    >
      <div className="absolute transition-all bg-white rounded-full size-4 top-1 left-1 dark:left-8 dark:bg-black" />
    </button>
  );
};

export default DarkModeBtn;
