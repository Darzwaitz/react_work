import React from "react";

const Content = () => {
  const compTest = () => {
    const text = "is working";
    return text;
  };
  return (
    <main>
      <p>Test {compTest()}</p>
    </main>
  );
};

export default Content;
