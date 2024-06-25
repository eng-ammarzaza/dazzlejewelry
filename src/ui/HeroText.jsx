import SparkleBtn from "../ui/Buttons/sparkleButon/SparkleBtn";
import ArrowBtn from "../ui/Buttons/ArrowButton/ArrowBtn";
function HeroText({ title, description, btn_type }) {
  return (
    <div className="flex justify-between bm">
      <div className="w-[600px] h-[450] md:pt-32 pt-10">
        <div className="flex">
          <span className="font-cinzel md:text-3xl font-semibold">
            New Collection
          </span>
          <hr className="md:mt-4 mt-3 ml-2 md:w-[60px] w-[30px]" />
        </div>
        <h1 className="font-heroTitle uppercase md:text-7xl text-xl">
          {" "}
          {title}
        </h1>
        <p className="font-heroDesc md:text-3xl text-sm md:py-8 py-2 md:mr-0 mr-10">
          {description}
        </p>
        {btn_type === "sparkle_btn" ? (
          <SparkleBtn />
        ) : (
          <ArrowBtn type={title} />
        )}
      </div>
      <div className="md:pt-32 pt-10">
        <hr className="w-0.5 md:h-12 h-6 bg-brand-500 border-none ml-1.5" />
        <span className="text-brand-500 font-cinzel md:text-xl text-xs font-semibold pr-4">
          D <br />
          A <br />
          Z <br />
          Z <br />
          L <br />
          E <br />
        </span>
        <hr className="w-0.5 md:h-12 h-6 bg-brand-500 border-none ml-1.5" />
      </div>
    </div>
  );
}

export default HeroText;
