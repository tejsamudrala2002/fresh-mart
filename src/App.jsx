import React from "react";
import Home from "./navcomponents/Home";
import Cart from "./navcomponents/Cart";
import About from "./navcomponents/About";
function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">React Mart</h1>
      <React/>
      <search/>
      <div className="navbar">
        <Home/>
        <Cart/>
        <About/>
        <Cart/>
      </div>

      <h1>hello</h1>
    </div>
  );
}

export default App;
