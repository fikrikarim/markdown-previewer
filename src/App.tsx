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
    if (theme === Theme.light) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} className="toggleButton">
        Toggle theme
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

      <div className="column">
        <ReactMarkdown source={editorValue} />
      </div>
    </div>
  );
}

export default App;
