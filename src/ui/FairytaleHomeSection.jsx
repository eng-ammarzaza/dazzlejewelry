import SingleFairytaleColl from "./SingleFairytaleColl";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GiFairyWand } from "react-icons/gi";

function FairytaleHomeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-[#edbfb7] py-8 h-fit overflow-hidden">
      <p className="font-fairytale md:text-6xl text-5xl text-[#fff] flex justify-center gap-3">
        Fairytale collections <GiFairyWand />
      </p>
      <p className="bm text-center md:text-xl text-sm font-giftingDesc my-8 italic">
        With Dazzle you will always be unique! For an unforgettable look live
        out your fairytale dreams with Dazzle's new whimsical collections that
        transport you to a world full of magic and wonder!
      </p>

      <ul className=" flex flex-col list-none [&>*:nth-child(even)]:self-end [&>*:nth-child(odd)]:self-start">
        <li data-aos="flip-left" data-aos-delay={1000} data-aos-duration={4000}>
          <SingleFairytaleColl
            name={"ONE & ONLY COLLECTION"}
            image={"/one&onlytitle.jpg"}
            type={"oneandonly"}
          >
            Transform into Cinderella of the event and captivate onlookers with
            this collection, featuring only one piece from each design that will
            make time stand still!
          </SingleFairytaleColl>
        </li>

        <li
          data-aos="flip-right"
          data-aos-delay={2000}
          data-aos-duration={4000}
        >
          <SingleFairytaleColl
            name={"Sleeping Beauties collection"}
            image={"/gemstonetitle.jpg"}
            type={"gemstone"}
          >
            Reawakening eyes with a ravishing design along with impressive
            sparkle and sense of refinement from our flawless gemstone
            collection.
          </SingleFairytaleColl>
        </li>

        <li data-aos="flip-left" data-aos-delay={3000} data-aos-duration={4000}>
          <SingleFairytaleColl
            name={"PEARL COLLECTION"}
            image={"/peartitle.jpg"}
            type={"pearls"}
          >
            Be the mermaid of the occasion and drown everyone's gaze with the
            unparalleled beauty of our pearl pieces!
          </SingleFairytaleColl>
        </li>

        <li
          data-aos="flip-right"
          data-aos-delay={3000}
          data-aos-duration={4000}
        >
          <SingleFairytaleColl
            name={"diamond COLLECTION"}
            image={"/diamondtitle.jpg"}
            type={"diamond"}
          >
            The enchanting elegance of our distinctive collection of diamond
            pieces is eye-catching and confuses every mirror attempts to reflect
            its beauty!
          </SingleFairytaleColl>
        </li>
      </ul>
    </div>
  );
}

export default FairytaleHomeSection;
