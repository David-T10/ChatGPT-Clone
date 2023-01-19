import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";
import {arrayItems} from "./AIOptions";
import OptionSelection from "./components/OptionSelection";

function App() {
  
  return (
    <div className="App">
      <OptionSelection arrayItems = {arrayItems}/>
    </div>
  );
}

export default App;
