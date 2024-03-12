import { useState } from "react";
import Form from "./components/Form.tsx";
import Filter from "./components/Filter.tsx";
import List from "./components/List.tsx";

type FromData = {
  description: string;
  amount: number;
  category: string;
};

type ExpenseItem = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

function App() {
  const [expensesArray, setExpensesArray] = useState<ExpenseItem[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("All Categories");
  const categoriesOptionArray = ["Groceries", "Utilities", "Enterteinment"];

  const handleFormData = (data: FromData) => {
    const newId = chooseNewId();
    setExpensesArray([...expensesArray, { ...data, id: newId }]);
  };

  const chooseNewId = () => {
    return expensesArray?.length == 0 ? 0 : expensesArray.length - 1;
  };

  const deleteExpenseFromArray = (idToBeDeleted: number) => {
    setExpensesArray(expensesArray.filter((item) => item.id != idToBeDeleted));
  };

  return (
    <>
      <Form categoriesArray={categoriesOptionArray} handleSubmit={handleFormData} />
      <Filter optionsArray={categoriesOptionArray} filterStateSetter={setSelectedFilter} />
      <List
        arrayToList={expensesArray}
        categoryAsFilter={selectedFilter}
        handleDeleteButton={(id) => deleteExpenseFromArray(id)}
      />
    </>
  );
}
export default App;
