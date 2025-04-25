import Banner from "./components/Banner";
import banday from "./assets/banday/banday1.webp";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black">
      <Banner />
      <div className="flex flex-col items-center justify-center p-10 bg-white dark:bg-black">
        <section className="flex flex-col space-y-1">
          <h3 className="text-sm font-semibold text-gray-500 sm:text-base">
            1st project
          </h3>
          <p className="sm:text:lg">
            우당탕탕 락스타를 꿈꾼다면? <br /> 첫만남 밴드 매칭 프로젝트
          </p>
          <h1 className="text-4xl font-bold">BANDAY</h1>
          <img
            alt="banday"
            src={banday}
            width={600}
            className="rounded shadow-lg shadow-gray-500 sm:text-xl"
          />
        </section>
      </div>
    </div>
  );
}
//벤데이 프로젝트

//벤쿠스틱

//뉴비

//프렌즈십
