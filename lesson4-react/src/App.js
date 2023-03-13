import React, { useState } from "react";
import AlertButton from "./components/AlertButton";
import InputWithClean from "./components/InputWithClean";

export default function App() {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");

  function handleChangeName(event) {
    setInputName(event.target.value);
  }

  function handleChangeSurname(event) {
    setInputSurname(event.target.value);
  }

  return (
    <div className="App">
      <h1 class="fs-1 text-danger">Lesson 4</h1>

      <InputWithClean
        placeholder={"Enter your name"}
        value={inputName}
        onChange={handleChangeName}
        clearInput={() => setInputName("")}
      />
      <InputWithClean
        placeholder={"Enter your surname"}
        value={inputSurname}
        onChange={handleChangeSurname}
        clearInput={() => setInputSurname("")}
      />

      <AlertButton
        value={`${inputName} ${inputSurname}`}
        afterAlert={() => {
          setInputName("");
          setInputSurname("");
        }}
      />
    </div>
  );
}
