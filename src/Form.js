const Forms = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="user"
        name="username"
        value={props.username}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={props.password}
        onChange={props.handleInputChange}
      />
      <button type="submit" onClick={props.handleFormSubmit}>
        Add Item
      </button>
    </>
  );
};
export default Forms;
