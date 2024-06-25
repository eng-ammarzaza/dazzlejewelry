import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";
  function handleChange(e) {
    searchParams.set("filter", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <span>
      <span className=" font-cinzel md:text-lg">Filter by: </span>
      <Select options={options} onChange={handleChange} value={filter} />
    </span>
  );
}

export default Filter;
