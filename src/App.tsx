import React from "react";
import {
  ControlledEditor,
  ControlledEditorOnChange,
} from "@monaco-editor/react";

import "./App.css";

function App() {
  const handleEditorChange: ControlledEditorOnChange = (event, value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <ControlledEditor
        height="90vh"
        value={"# Markdown preview"}
        onChange={handleEditorChange}
        language="markdown"
      />
    </div>
  );
}

export default App;
