import { useRef } from "react";

interface Properties {
  optionsArray: string[];
  filterStateSetter: (value: string) => void;
}

function Filter({ optionsArray, filterStateSetter }: Properties) {
  const selectedRef = useRef<HTMLSelectElement>(null);

  const handleSelect = () => {
    filterStateSetter(selectedRef.current?.value || "");
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="filterSelector" className="form-label"></label>
      </div>
      <div className="mb-3">
        <select ref={selectedRef} id="filterSelector" className="form-select" onChange={handleSelect}>
          <option defaultValue="All Categories">All Categories</option>
          {optionsArray.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Filter;
