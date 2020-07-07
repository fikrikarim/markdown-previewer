import React, { useState } from "react";
import {
  ControlledEditor,
  ControlledEditorOnChange,
} from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import Switch from "react-switch";

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
      <Switch
        className="themeSwitch"
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#202124"
        offColor="#569CD6"
        onChange={toggleTheme}
        checked={theme === Theme.light}
      />

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
