import Banner from "./components/Banner";
import BandProjectCard from "./components/BandProjectCard";
import bandayImg from "./assets/banday/banday1.webp";
import bcousticImg from "./assets/bancoustic/bandcoustic.webp";
import newBImg from "./assets/newb/newb.webp";
import friendshipImg1 from "./assets/friendship/friendship1.jpeg";
//import friendshipImg2 from "./assets/friendship/friendship2.jpeg";
//import friendshipImg3 from "./assets/friendship/friendship3.jpeg";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black">
      <Banner />
      <div className="flex flex-col items-center justify-center p-10 space-y-20 bg-white dark:bg-black">
        <BandProjectCard
          subTitle="1st project"
          description={
            <>
              우당탕탕 <strong>락스타</strong>를 꿈꾼다면? <br />
              첫만남 밴드 매칭 프로젝트
            </>
          }
          title="BANDAY"
          image={bandayImg}
        />
        <BandProjectCard
          subTitle="2nd project"
          description={
            <>
              어쿠스틱한 잔잔함이 좋다면? <br />
              <strong>어쿠스틱</strong> 밴드 프로젝트
            </>
          }
          title="Bcoustic"
          image={bcousticImg}
        />
        <BandProjectCard
          subTitle="3rd project"
          description={
            <>
              연주는 못하지만 밴드는 하고 싶어 <br />
              <strong>왕초보</strong> 밴드 프로젝트
            </>
          }
          title="NEWB Band"
          image={newBImg}
        />
        <BandProjectCard
          subTitle="Special project"
          description={
            <>
              일상밴드 회원 누구나 편하게 <br />
            </>
          }
          title="Friendship"
          image={friendshipImg1}
        />
      </div>
    </div>
  );
}
//벤데이 프로젝트

//벤쿠스틱

//뉴비

//프렌즈십
