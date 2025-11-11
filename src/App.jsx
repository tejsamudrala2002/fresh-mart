import React from "react";
import Home from "./navcomponents/Home";
import Cart from "./navcomponents/Cart";
import About from "./navcomponents/About";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">React Mart</h1>
      <React/>
      <search/>
      
        <Home/>
        <Cart/>
        <About/>
        <Cart/>
      <div className="navbar">
        <link  href="/Home">Home </link>     
        <link  href="/Cart">Cart </link>
        <link  href="About/">About</link>


      </div>
      <div>
        <Routes path="" element=""></Routes>
      </div>

      <h1>hello</h1>
    </div>
  );
}

export default App;
