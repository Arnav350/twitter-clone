import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Widgets from "./components/Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
      <Widgets />
    </div>
  );
}

export default App;
