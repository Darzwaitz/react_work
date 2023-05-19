// import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

// useState accepts an initial state and returns two values:

//     The current state.
//     A function that updates the state.

const Content = ({ items, handleCheck, handleDelete }) => {
  // localStorage.getItem("shoppinglist");

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
