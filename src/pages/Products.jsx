import { useLoaderData, useSearchParams } from "react-router-dom";
import ProductCard from "../features/products/ProductCard";
import ProductsOperations from "../ui/ProductsOperations";
import { useEffect } from "react";

function Products() {
  useEffect(() => {
    document.title = "Dazzle: Products";
    return function () {
      document.title = "Dazzle";
    };
  }, []);

  const { products } = useLoaderData();
  const [searchParams] = useSearchParams();

  // 1. Category
  const category = searchParams.get("category") || "all";
  let categorizedProducts;
  if (category === "all") categorizedProducts = products;
  if (category === "necklaces")
    categorizedProducts = products.filter(
      (product) => product.category === "necklaces"
    );
  if (category === "bracelets")
    categorizedProducts = products.filter(
      (product) => product.category === "bracelets"
    );
  if (category === "earrings")
    categorizedProducts = products.filter(
      (product) => product.category === "earrings"
    );
  if (category === "rings")
    categorizedProducts = products.filter(
      (product) => product.category === "rings"
    );

  // 2. Filter
  const filter = searchParams.get("filter") || "all";
  let filteredProducts;
  if (filter === "all") filteredProducts = categorizedProducts;
  if (filter === "discount")
    filteredProducts = categorizedProducts.filter(
      (product) => product.discount > 0
    );
  if (filter === "no-discount")
    filteredProducts = categorizedProducts.filter(
      (product) => product.discount === null
    );
  if (filter === "best-seller")
    filteredProducts = categorizedProducts.filter(
      (product) => product.bestSeller === true
    );

  //3. Sort
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedProducts = filteredProducts?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <>
      <ProductsOperations />
      <div className="bm flex flex-wrap justify-center">
        {sortedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Products;
