const Table = (props) => {
  const items = props.data;
  return (
    <div id="Table">
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
          {items.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.username}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
