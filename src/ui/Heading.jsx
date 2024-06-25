import { IoSparklesSharp } from "react-icons/io5";

function Heading({ children }) {
  return (
    <div className="bm flex gap-2 mt-6 font-cinzel font-medium md:text-3xl text-xl">
      {" "}
      {children} <IoSparklesSharp />
    </div>
  );
}

export default Heading;
