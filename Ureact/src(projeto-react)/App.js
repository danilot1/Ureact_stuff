import React from "react";
import Bomdia from "./components/Bomdia/index";
import Card from "./components/Card";

function App() {
  return (
   <div>
    <Card>
      <Bomdia nome = "Edson" idade ={33}/>
    </Card>
    <Card>
        <h1>novo card</h1>
    </Card>
  </div>
  );
}

export default App;
