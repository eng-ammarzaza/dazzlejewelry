function Testimonial({ testimonial }) {
  return (
    <div className="border-solid border-brand-500 border-2 p-6 text-center rounded-tl-3xl rounded-br-3xl">
      <p className="font-semibold md:text-lg">{testimonial.name}</p>
      <p className=" font-giftingDesc md:text-lg">{testimonial.testimonial}</p>
    </div>
  );
}

export default Testimonial;
