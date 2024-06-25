import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

function AppErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <p>Oops</p>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center h-dvh">
        <div className="md:text-5xl text-3xl font-cinzel text-center ">
          Oops something went wrong!
        </div>
        <hr className="bg-brand-500 h-1 w-1/3 mx-auto my-6 border-none" />
        <button className=" font-bold" onClick={() => navigate("/")}>
          &larr; Back Home
        </button>
      </div>
    );
  }
}

export default AppErrorBoundary;
