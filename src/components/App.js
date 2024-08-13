import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [lightDark, setLightDark] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = lightDark ? "Dark" : "Light"

  function toggleLightAndDark() {
    setLightDark(!lightDark)
  }
  return (
    <div className={lightDark ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleLightAndDark}>{appClass} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
