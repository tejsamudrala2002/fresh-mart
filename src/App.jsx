import React from "react";
import Search from "./navcomponents/Search";
import Home from "./navcomponents/Home";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">React Mart</h1>
      <Search />
      <Home/>
      <React/>
    </div>
  );
}

export default App;
