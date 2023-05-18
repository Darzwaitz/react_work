import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

// useState accepts an initial state and returns two values:

//     The current state.
//     A function that updates the state.

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 1",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  // localStorage.getItem("shoppinglist");

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => {
            return (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                />
                <label
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                  onDoubleClick={() => handleCheck(item.id)}
                >
                  {item.item}
                </label>
                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex="0"
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Your list iz empty</p>
      )}
    </main>
  );
};

export default Content;
