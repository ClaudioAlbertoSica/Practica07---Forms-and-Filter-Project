import { FormEvent, useRef } from "react";

interface Properties {
  categoriesArray: string[];
  handleSubmit: (description: string, amount: number, category: string) => void;
}

function Form({ categoriesArray, handleSubmit }: Properties) {
  const descrptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const handleFormSubmition = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(descrptionRef.current?.value || "", parseInt(amountRef.current?.value || "0"), categoryRef.current?.value || "");
  };

  return (
    <div id="form-div">
      <form onSubmit={(event) => handleFormSubmition(event)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input ref={descrptionRef} id="description" type="text" className="form-control" required minLength={3} />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input ref={amountRef} id="amount" type="number" className="form-control" required min={1} />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select ref={categoryRef} id="category" className="form-select" required>
            <option defaultValue=""> </option>
            {categoriesArray.map((item) => (
              <option value={item} key={item}>
                {item}{" "}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
