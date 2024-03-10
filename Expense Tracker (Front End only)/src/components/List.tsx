interface Properties {
  arrayToList: { id: number; description: string; amount: number; category: string }[];
  categoryAsFilter?: string;
  handleDeleteButton: (id: number) => void;
}

function List({ arrayToList, categoryAsFilter = "All categories", handleDeleteButton }: Properties) {
  let totalToDisplay = 0;
  const arrayToBeListed = () => {
    let arrayToReturn: { id: number; description: string; amount: number; category: string }[];

    if (categoryAsFilter != "All Categories") {
      arrayToReturn = arrayToList.filter((item) => item.category == categoryAsFilter && item);
    } else {
      arrayToReturn = arrayToList.filter((item) => item.category != "none" && item);
    }

    totalToDisplay = arrayToReturn.reduce((acum, item) => (acum += item.amount), 0);
    return arrayToReturn;
  };

  return (
    <table className="table table-borderless">
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
            <td>{item.description}</td> <td>$ {item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button type="button" className="btn btn-danger" onClick={() => handleDeleteButton(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td>
          <b>Totals:</b>
        </td>
        <td colSpan={3}>$ {totalToDisplay}</td>
      </tfoot>
    </table>
  );
}

export default List;
