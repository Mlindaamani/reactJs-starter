import { useState } from "react";

export const ListGroup = () => {
  const heading = "List Group";
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 4"];
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container justify-content-between aligin-items-center w-50 mb-5">
      <h1 className=" mb-3 mt-4 p-3 text-warning text-center">{heading}</h1>
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


