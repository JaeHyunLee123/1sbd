import Banner from "./components/Banner";
import BandProjectCard from "./components/BandProjectCard";
import bandayImg from "./assets/banday/banday1.webp";
import bcousticImg from "./assets/bancoustic/bandcoustic.webp";
import newBImg from "./assets/newb/newb.webp";
import friendshipImg1 from "./assets/friendship/friendship1.jpeg";
import friendshipImg2 from "./assets/friendship/friendship2.jpeg";
import friendshipImg3 from "./assets/friendship/friendship3.jpeg";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black">
      <Banner />
      <div className="flex flex-col items-center w-full p-10 py-10 my-10 bg-white dark:bg-black sm:px-40 ">
        <h1 className="w-full font-bold max-w-[2000px] mb-8 sm:text-6xl text-5xl">
          프로젝트
        </h1>
        <div className="w-full items-center justify-center flex flex-wrap gap-20 max-w-[2000px]">
          <BandProjectCard
            subTitle="1st project"
            description={
              <>
                우당탕탕 <strong>락스타</strong>를 꿈꾼다면? <br />
                첫만남 밴드 매칭 프로젝트
              </>
            }
            title="BANDAY"
            image={[bandayImg]}
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
            image={[bcousticImg]}
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
            image={[newBImg]}
          />
          <BandProjectCard
            subTitle="Special project"
            description={
              <>
                일상밴드 회원 누구나 편하게 <br />
              </>
            }
            title="Friendship"
            image={[friendshipImg1, friendshipImg2, friendshipImg3]}
          />
        </div>
        <div className="w-full max-w-[2000px] mt-20">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl text-balance break-keep">
            일상밴드 멤버에게 제공되는 혜택
          </h1>
          <ul className="flex flex-col space-y-1">
            <li className="text-base sm:text-xl">
              프로젝트 참여 1회 당 <strong>1만원 할인</strong>
            </li>
            <li className="text-base sm:text-xl">
              일상밴드 <strong>합주실 할인</strong> 및 우선 대여
            </li>
            <li className="text-base sm:text-xl">굉장히 엄창난 혜택1</li>
            <li className="text-base sm:text-xl">굉장히 엄창난 혜택2</li>
            <li className="text-base sm:text-xl">굉장히 엄창난 혜택3</li>
          </ul>
        </div>
      </div>
      <div
        className={`bg-[url(./assets/oasis-perform.jpeg)] bg-center bg-cover flex flex-col justify-center items-center p-20  w-full`}
      >
        <p className="font-semibold text-white text-lg/7 sm:text-xl/8 md:text-2xl/10 text-balance break-keep text-shadow ">
          음악은 누구나 할 수 있다는 의미의 뭔가 굉장히 멋진 문구
          <br />
          음악은 누구나 할 수 있다는 의미의 뭔가 굉장히 멋진 문구
        </p>
        <div className="px-[2px] py-[4px] bg-white border-black border-4 box-border hover:scale-105 transition-transform hover:cursor-pointer">
          <span className="text-2xl font-semibold text-white px-[3px] py-[4px] box-border bg-black text-center">
            Join
          </span>
        </div>
      </div>
    </div>
  );
}
