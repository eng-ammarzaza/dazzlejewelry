import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "Page not found";
    return function () {
      document.title = "Dazzle";
    };
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-6">
      <button onClick={() => navigate("/")} className="font-bold">
        &larr; Back to website
      </button>
      <div className="text-4xl font-cinzel border-b-2 py-2 border-brand-500">
        {" "}
        <p>Page Not Found!</p>
      </div>
      <div className="font-semibold font-giftingDesc text-xs md:text-lg">
        <p>
          The page you requested was not found, and we have a fine guess why.
        </p>
        <p className="my-6">
          If you typed the URL directly, please make sure the spelling is
          correct.{" "}
        </p>
        <p>If you clicked on a link to get here, the link is outdated.</p>
      </div>
    </div>
  );
}

export default NotFound;
