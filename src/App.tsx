import useDarkMode from "./hooks/useDarkMode";

export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors ">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">🌗 Tailwind Dark Mode</h1>
        <button
          className="px-4 py-2 transition bg-gray-200 rounded dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}
