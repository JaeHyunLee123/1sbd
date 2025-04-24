import useDarkMode from "../hooks/useDarkMode";

const DarkModeBtn = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      className="relative bg-transparent border-2 border-white rounded-full w-14 h-7 dark:border-black focus:outline-0"
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      <div className="absolute transition-all bg-white rounded-full size-4 top-1 left-1 dark:left-8 dark:bg-black" />
    </button>
  );
};

export default DarkModeBtn;
