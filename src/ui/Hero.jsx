import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroText from "./HeroText";

function Hero() {
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
  };
  return (
    <div className="overflow-x-hidden">
      <Slider {...settings}>
        <div className="bg-[url('/dazzleshop.jpg')] max-h-dvh md:h-dvh bg-cover ">
          <HeroText
            title={"Dazzle Jewelery"}
            description={
              "With our jewelery you will have a sparkle that dazzles the eyes!"
            }
            btn_type={"sparkle_btn"}
          />
        </div>
        <div className="bg-[url('/promise.jpg')] max-h-dvh md:h-dvh bg-cover">
          <HeroText
            title={"Promise rings"}
            description={
              "Our new engagement rings collection shows endless elegance like endless love!"
            }
            btn_type={"arrow_btn"}
          />
        </div>
        <div className="bg-[url('/bridal.jpg')] max-h-dvh md:h-dvh bg-cover">
          <HeroText
            title={"Bridal Sets"}
            description={
              "Our top-notch jewelry are made to add a mesmerizing touch to your look."
            }
            btn_type={"arrow_btn"}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
