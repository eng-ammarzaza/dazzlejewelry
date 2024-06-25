import React from "react";
import Slider from "react-slick";
import Heading from "../../ui/Heading";
import Testimonial from "./Testimonial";

export default function Testimonials({ testimonials }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  return (
    <>
      <Heading>Testimonials</Heading>
      <div className="bm my-6">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}
