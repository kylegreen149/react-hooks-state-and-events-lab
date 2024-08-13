import React, {useState} from "react";

function Item({ name, category }) {

  const [addRemove, setAddRemove] = useState(false)

  function toggleAddRemove() {
    setAddRemove(!addRemove)
  }

  return (
    <li className={addRemove ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleAddRemove} className="add">{addRemove ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
