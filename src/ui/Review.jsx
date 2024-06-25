function Review({ review }) {
  return (
    <div>
      <p className="font-semibold font-giftingDesc text-[#645e5e] ">
        {review.name}
      </p>
      <p className="md:font-medium text-sm md:text-base font-giftingDesc">
        {review.review}
      </p>
    </div>
  );
}

export default Review;
