import { useNavigate } from "react-router-dom";
function SingleFairytaleColl({ name, image, children, type }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-24">
        <div className="z-30 absolute justify-between w-80 md:h-80 h-64 p-8 bg-[#fff] bg-opacity-85 rounded-tl-3xl rounded-br-3xl">
          <div>
            <p className="uppercase font-semibold md:text-xl">{name}</p>
            <p className="mt-4 mb-8 italic md:text-xl font-giftingDesc">
              {children}
            </p>
          </div>
          <button
            onClick={() => navigate(`/collections/${type}`)}
            className="hover:font-bold"
          >
            See collection
          </button>
        </div>
        <img
          className="shadow-2xl max-w-96 md:h-1/4 h-72 ml-24 pt-10 z-20 "
          src={image}
          alt={name}
        />
      </div>
      <p className="md:text-5xl text-3xl font-semibold text-[#e5a9a9] mb-10 uppercase">
        {name}
      </p>
    </>
  );
}

export default SingleFairytaleColl;
