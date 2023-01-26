import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";
import { arrayItems } from "./AIOptions";
import OptionSelection from "./components/OptionSelection";
import QandA from "./components/QandA";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const selectOption = (option) => {
    setOption(option);
  };
  const submit = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setOutput(response.data.choices[0].text);
  };
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <QandA submit={submit} setInput={setInput} output = {output} />
      )}
    </div>
  );
}

export default App;
