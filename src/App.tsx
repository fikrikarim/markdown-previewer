import React, { useState } from "react";
import {
  ControlledEditor,
  ControlledEditorOnChange,
} from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";

import "./App.css";

const defaultEditorValue = `# Markdown Preview
## This is header 2

_ Italicia 🇮🇹 _

** boldie **
`;

enum Theme {
  "light" = "light",
  "dark" = "dark",
}

function App() {
  const [editorValue, setEditorValue] = useState(defaultEditorValue);
  const [theme, setTheme] = useState<Theme>(Theme.light);

  const handleEditorChange: ControlledEditorOnChange = (event, value) => {
    setEditorValue(String(value));
  };

  const toggleTheme = () => {
    theme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light);
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} className="toggleButton">
        Toggle dark theme
      </button>

      <div className="column">
        <ControlledEditor
          theme={theme}
          height="100vh"
          value={editorValue}
          onChange={handleEditorChange}
          language="markdown"
        />
      </div>

      <div className={`column ${theme === "light" ? "light" : "dark"}`}>
        <ReactMarkdown source={editorValue} />
      </div>
    </div>
  );
}

export default App;
