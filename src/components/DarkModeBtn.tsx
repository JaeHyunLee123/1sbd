import useDarkMode from "../hooks/useDarkMode";

const DarkModeBtn = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      className="fixed flex items-center justify-center text-3xl transition bg-black rounded-full active:scale-90 hover:scale-110 bottom-5 right-5 size-14 dark:bg-white outline-0"
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      {isDark ? <span>☀️</span> : <span>🌙</span>}
    </button>
  );
};

export default DarkModeBtn;
