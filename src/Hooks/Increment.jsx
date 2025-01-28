import { useState } from "react";

function Increment({ min, startNum, id }) {
  const [num, setNum] = useState(startNum);

  const updateNum = (change) => {
    setNum((prevNum) => Math.max(min, prevNum + change));
  };

  return (
    <div id={id}>
      <button
        type="button"
        className="btn border-0 mx-1"
        onClick={() => {
          updateNum(-1);
        }}
        disabled={num === min}>
        -
      </button>
      {num}
      <button
        type="button"
        className="btn border-0 mx-1"
        onClick={() => {
          updateNum(1);
        }}>
        +
      </button>
    </div>
  );
}

export default Increment;
