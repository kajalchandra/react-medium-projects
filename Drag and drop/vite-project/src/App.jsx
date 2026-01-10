import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DragDrop from './Components/DragDrop'
function App() {
  //   const handleDragStart = () => {
  //   console.log("Dragging started");
  // };

  // const handleDrop = () => {
  //   console.log("Dropped");
  // };

  return (
    <>
      {/* <DragDrop/> */}
       {/* <div
        draggable
        onDragStart={handleDragStart}
        style={{ padding: "20px", background: "lightblue", width: "100px" }}
      >
        Drag me
      </div>
       <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        style={{
          marginTop: "20px",
          padding: "40px",
          background: "lightgray",
        }}
      >
        Drop here
      </div> */}
      <DragDrop/>
    </>
  )
}

export default App
