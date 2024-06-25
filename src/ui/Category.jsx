import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Category({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  function handleChange(e) {
    searchParams.set("category", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <span>
      <span className="font-cinzel md:text-lg">Category: </span>
      <Select options={options} onChange={handleChange} value={category} />
    </span>
  );
}

export default Category;
