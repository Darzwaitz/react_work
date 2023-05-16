import { useState } from "react";

// useState accepts an initial state and returns two values:

//     The current state.
//     A function that updates the state.

const Content = () => {
  const [name, setName] = useState("Darz");
  const [count, setCount] = useState(0);

  const compTest = () => {
    const text = "is working";
    return text;
  };
  const currentData = "text changed";

  let handleClick = (e) => {
    // let handleClickBool = true;
    e.target.innerText = currentData;
    // console.log(`name is: ${name},setName is: ${setName}`);
    setName("Darz again");
  };

  const countState = () => {
    setCount(count + 1);
    // console.log(count);
    setCount(count + 1);
    console.log(count);
  };

  return (
    <main>
      <p>Test {compTest()}</p>
      <p>Hello {name}</p>
      <button onClick={handleClick}>temp text</button>
      <p>State Count</p>
      <button onClick={countState}>count state</button>
    </main>
  );
};

export default Content;
