import Banner from "./components/Banner";
import banday from "./assets/banday/banday1.webp";
import BandProjectCard from "./components/BandProjectCard";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black">
      <Banner />
      <div className="flex flex-col items-center justify-center p-10 bg-white dark:bg-black">
        <BandProjectCard
          subTitle="1st project"
          description={
            <>
              우당탕탕 <strong>락스타</strong>를 꿈꾼다면? <br />
              첫만남 밴드 매칭 프로젝트
            </>
          }
          title="BANDAY"
          image={banday}
        />
      </div>
    </div>
  );
}
//벤데이 프로젝트

//벤쿠스틱

//뉴비

//프렌즈십
