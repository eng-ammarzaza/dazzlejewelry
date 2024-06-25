import { Link } from "react-router-dom";
import Review from "./Review";

function Reviews({ reviews }) {
  reviews = reviews || {};
  const reviewsArr = Object?.values(reviews);

  return (
    <div className="bm pt-6 flex flex-col bg-[#fff] ">
      <p className="uppercase mt-4 font-cinzel font-bold md:text-2xl text-xl">
        Reviews:
      </p>
      <p className="text-sm mb-4 font-giftingDesc">
        You can send yours via our{" "}
        <Link to="/contact" className="underline italic">
          contact section
        </Link>{" "}
        along with the bill serial number.
      </p>
      <div className="flex flex-col flex-wrap gap-5 border-2 p-4 rounded-lg border-[#bab5b5]">
        {reviewsArr?.length > 0 ? (
          reviewsArr?.map((review) => (
            <Review review={review} key={reviewsArr.indexOf(review)} />
          ))
        ) : (
          <p className="text-xl font-giftingDesc text-[#757070] m-auto p-5">
            No reviews provided for this product till now.
          </p>
        )}
      </div>
    </div>
  );
}

export default Reviews;
