import React, { useState } from "react";
import AlertButton from "./components/AlertButton";
import InputWithClean from "./components/InputWithClean";

export default function App() {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");

  function handleChangeName(event) {
    setInputName((inputName) => inputName + event.nativeEvent.data);
  }

  function handleChangeSurname(event) {
    setInputSurname((inputName) => inputName + event.nativeEvent.data);
  }

  return (
    <div className="App">
      <h1 class="fs-1 text-danger">Lesson 4</h1>
      <InputWithClean
        placeholder={"Enter your name"}
        inputName={inputName}
        onChange={(event) => handleChangeName(event)}
        clearInput={() => setInputName("")}
      />
      <InputWithClean
        placeholder={"Enter your surname"}
        inputSurname={inputSurname}
        onChange={(event) => handleChangeSurname(event)}
        clearInput={() => setInputSurname("")}
      />
      <AlertButton
        inputName={inputName}
        inputSurname={inputSurname}
        clearInputName={() => setInputName("")}
        clearInputSurname={() => setInputSurname("")}
      />
    </div>
  );
}
