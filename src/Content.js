// import { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";
import ItemList from "./ItemList";

// useState accepts an initial state and returns two values:

//     The current state.
//     A function that updates the state.

const Content = ({ items, handleCheck, handleDelete }) => {
  // localStorage.getItem("shoppinglist");

  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list iz empty</p>
      )}
    </main>
  );
};

export default Content;
