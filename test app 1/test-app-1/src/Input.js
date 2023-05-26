const Input = ({ colorValue, setColorValue }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="">Add Colour Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add Colour name"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
