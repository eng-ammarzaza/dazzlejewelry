import CompleteLook from "../ui/CompleteLook";
import ProductDetails from "../ui/ProductDetails";
import { useLoaderData } from "react-router-dom";
import Reviews from "../ui/Reviews";
import { useEffect } from "react";

function Product() {
  const data = useLoaderData();

  useEffect(() => {
    document.title = `${data[0][0].name}`;
    return function () {
      document.title = "Dazzle";
    };
  }, [data]);
  return (
    <div className="bg-[url('/silk-bg.jpg')] bg-cover">
      <ProductDetails product={data[0][0]} />
      {data[1].length > 0 && <CompleteLook look={data[1]} />}
      <Reviews reviews={data[0][0].reviews} />
    </div>
  );
}

export default Product;
