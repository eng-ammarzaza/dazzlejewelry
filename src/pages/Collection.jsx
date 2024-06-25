import { useLoaderData } from "react-router-dom";
import CollectionHeader from "../ui/CollectionHeader";
import ProductCard from "../features/products/ProductCard";
import { useEffect } from "react";
import { capitalizeFLetter } from "../utils/helpers";

function Collection() {
  const { products } = useLoaderData();
  useEffect(() => {
    document.title = `Dazzle: ${capitalizeFLetter(
      products[0].collection === "oneandonly"
        ? "one & Only"
        : products[0].collection
    )} Collection`;
    return function () {
      document.title = "Dazzle";
    };
  }, [products]);

  return (
    <div>
      {products[0].collection !== "bridal" &&
      products[0].collection !== "promise" ? (
        <CollectionHeader collection={products[0].collection} />
      ) : null}
      <div className="bm flex flex-wrap justify-center ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
