import { useState } from "react";
import Form from "./components/Form.tsx";
import Filter from "./components/Filter.tsx";
import List from "./components/List.tsx";

function App() {
  const categoriesOptionArray = ["Groceries", "Utilities", "Enterteinment"];
  const [expensesArray, setExpensesArray] = useState([{ id: -1, description: "Pick a Category", amount: 0, category: "none" }]);
  const [selectedFilter, setSelectedFilter] = useState("none");

  const handleFormData = (desc: string, am: number, cat: string) => {
    const newId = chooseNewId();
    console.log({
      id: newId,
      description: desc,
      amount: am,
      category: cat,
    });
    setExpensesArray([...expensesArray, { id: newId, description: desc, amount: am, category: cat }]);
  };

  const chooseNewId = () => {
    return expensesArray.length == 0 ? 0 : expensesArray.length - 1;
  };

  const deleteExpenseFromArray = (idToBeDeleted: number) => {
    setExpensesArray(expensesArray.filter((item) => item.id != idToBeDeleted));
  };

  return (
    <>
      <Form categoriesArray={categoriesOptionArray} handleSubmit={handleFormData} />
      <Filter optionsArray={categoriesOptionArray} filterStateSetter={setSelectedFilter} />
      <List arrayToList={expensesArray} categoryAsFilter={selectedFilter} handleDeleteButton={deleteExpenseFromArray} />
    </>
  );
}
export default App;
