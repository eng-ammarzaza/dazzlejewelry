import CompleteLookProduct from "./CompleteLookProduct";

function CompleteLook({ look }) {
  return (
    <div className="bm flex  flex-col bg-[#fff]">
      <p className="uppercase my-4 font-cinzel font-bold md:text-2xl text-xl">
        complete the look:
      </p>
      <div className="flex flex-wrap gap-5">
        {look?.map((product) => (
          <CompleteLookProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default CompleteLook;
