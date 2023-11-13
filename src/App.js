import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(()=>{
    document.title = text;
  },[text])

  useEffect(() => {
    // console.log("useEffect called");
    setTimeout(()=>setCount(0),5000)
  },[]);

  console.log("Component rendering");

  return (
          <>
              <button onClick={()=>setCount(count+1)}>
        
                  I have been clicked {count} times 
              </button>
              <input type="text"
                placeholder="Enter text here"
                onChange={(e)=>setText(e.target.value)}
              />

          </>

        
       );
}

export default App;
