import React, { useState, useEffect } from "react";
import Button from "./components/DeleteButton";
import NoteArea from "./components/NoteArea";
import Status from "./components/Status";
import Save from "./components/SaveButton";

const App = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const on_text_change = (event) => {
    const new_value = event.target.value;
    setText(new_value);
    setStatus("unsaved");
  };

  const on_click = () => {
    setText("");
    setStatus("unsaved");
  };

  function handleSave() {
    setStatus("saved");
  }

  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      setText(data);
      setStatus("saved");
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-900 w-full h-screen flex flex-row justify-center">
      <div className="flex flex-col justify-center">
        <div className="text-3xl text-center mb-6 font-bold font-mono text-white"> NoteTaker</div>
        <NoteArea value={text} onChange={on_text_change} />
        <div className="flex flex-row gap-3 justify-center">
          <Save notes={text} handleSave={handleSave} />
          <Button onClick={on_click}>Delete</Button>
          <Status status={status} />
        </div>
      </div>
    </div>
  );
};

export default App;
