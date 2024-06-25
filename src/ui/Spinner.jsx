import { useLayoutEffect } from "react";
import { BounceLoader } from "react-spinners";

function Spinner() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-dvh w-dvh flex justify-center">
      <BounceLoader color="#af8e51" className="m-auto" />
    </div>
  );
}

export default Spinner;
