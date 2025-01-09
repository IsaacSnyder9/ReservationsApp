import { useState } from "react";

function ListGroup() {
    const numbers = [1, 2, 3, 4, 5];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {numbers.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
