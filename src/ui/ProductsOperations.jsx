import Category from "./Category";
import Filter from "./Filter";
import SortBy from "./SortBy";

function ProductsOperations() {
  return (
    <div className="bm mt-5 flex md:flex-row md:gap-10 flex-col gap-4 justify-start">
      <Category
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "necklaces",
            label: "Necklaces",
          },
          {
            value: "bracelets",
            label: "Bracelets",
          },
          {
            value: "earrings",
            label: "Earrings",
          },
          {
            value: "rings",
            label: "Rings",
          },
        ]}
      />
      <Filter
        options={[
          {
            value: "all",
            label: "All Products",
          },
          {
            value: "no-discount",
            label: "No Discount",
          },
          {
            value: "discount",
            label: "With Discount",
          },
          {
            value: "best-seller",
            label: "Best Seller",
          },
        ]}
      />
      <SortBy
        options={[
          {
            value: "price-asc",
            label: "Price (Low to High)",
          },
          {
            value: "price-des",
            label: "Price (High to Low)",
          },
        ]}
      />
    </div>
  );
}

export default ProductsOperations;
