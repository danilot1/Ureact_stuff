import React from "react";
import Header from "./components/Header/index";
import Todo from "./components/todo/index";
import Lista from "./components/Lista";
import Item from "./components/Item";

function App() {
  return (
    <div >
      <main>
        <Header />
        <Todo />
      </main>
    </div>
  );
}

export default App;
