import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <span>
      <span className="font-cinzel md:text-lg">Sort by: </span>
      <Select options={options} onChange={handleChange} value={sortBy} />
    </span>
  );
}

export default SortBy;
