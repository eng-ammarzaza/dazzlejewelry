import { ClipLoader } from "react-spinners";

function MiniSpinner() {
  return (
    <ClipLoader
      color="#f3d8c7"
      // cssOverride={override}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default MiniSpinner;
