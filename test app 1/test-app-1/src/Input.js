import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
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
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle text colour
      </button>
    </form>
  );
};

export default Input;
