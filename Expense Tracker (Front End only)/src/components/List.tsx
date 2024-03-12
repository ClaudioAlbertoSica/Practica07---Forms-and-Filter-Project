type ListItem = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

interface Properties {
  arrayToList: ListItem[];
  categoryAsFilter?: string;
  handleDeleteButton: (id: number) => void;
}

function List({ arrayToList, categoryAsFilter = "All categories", handleDeleteButton }: Properties) {
  let totalToDisplay = 0;

  const arrayToBeListed = () => {
    let arrayToReturn: ListItem[];

    if (categoryAsFilter != "All Categories") {
      arrayToReturn = arrayToList.filter((item) => item.category == categoryAsFilter && item);
    } else {
      arrayToReturn = arrayToList.filter((item) => item.category != "---" && item);
    }

    totalToDisplay = arrayToReturn.reduce((acum, item) => (acum += item.amount), 0);
    return arrayToReturn;
  };

  if (arrayToList.length == 0 || (arrayToList[0].category == "---" && arrayToList.length == 1)) {
    return <></>;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th colSpan={2}>Category</th>
        </tr>
      </thead>
      <tbody>
        {arrayToBeListed().map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>$ {item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteButton(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <b>Totals:</b>
          </td>
          <td colSpan={3}>$ {totalToDisplay.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default List;
