import React, { useState } from "react";
import {
  ControlledEditor,
  ControlledEditorOnChange,
} from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";

import "./App.css";

function App() {
  const defaultValue = `# Markdown Preview
## This is header 2

_ Italicia 🇮🇹 _

** boldie **
`;

  const [editorValue, setEditorValue] = useState(defaultValue);

  const handleEditorChange: ControlledEditorOnChange = (event, value) => {
    setEditorValue(String(value));
  };

  return (
    <div className="App">
      <div className="column">
        <ControlledEditor
          height="100vh"
          value={editorValue}
          onChange={handleEditorChange}
          language="markdown"
        />
      </div>

      <div className="column">
        <ReactMarkdown source={editorValue} />
      </div>
    </div>
  );
}

export default App;
