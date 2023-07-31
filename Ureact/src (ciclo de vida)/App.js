import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [render, setRender] = useState(false)
  const [visible, setVisible] = useState(true)
  //componentMount
  useEffect(( )=>{
    console.log("Renderização incial")
  }, [])
  
  //didUpdate
  useEffect(())
  function handleRerender() {
    setRender(!render)
  }
  return (
    <div className="main">
      <h1> ciclo de vida dos componentes</h1>
      <button onClick={handleRerender}> Re-render</button>
      <button onClick={""}>Show</button>
    </div>
  );
}

export default App;
