import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Darz");
  const compTest = () => {
    const text = "is working";
    return text;
  };
  const currentData = "text changed";

  let handleClick = (e) => {
    // let handleClickBool = true;
    e.target.innerText = currentData;
    console.log(`name is: ${name},setName is: ${setName}`);
  };
  return (
    <main>
      <p>Test {compTest()}</p>
      <p>Hello {name}</p>
      <button onClick={handleClick}>temp text</button>
    </main>
  );
};

export default Content;
