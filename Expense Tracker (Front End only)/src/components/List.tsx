interface Properties {
  arrayToList: { id: number; description: string; amount: number; category: string }[];
  categoryAsFilter?: string;
}

function List({ arrayToList, categoryAsFilter = "-1" }: Properties) {
  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th></th>
      </tr>
      {arrayToList.map(
        (item) =>
          item.category == categoryAsFilter && (
            <tr>
              <td>{item.description}</td> <td>{item.amount}</td>
              <td>{item.category}</td>
            </tr>
          )
      )}
    </table>
  );
}

export default List;
