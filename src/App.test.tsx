import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the editor", () => {
  const { getByTestId } = render(<App />);
  const editorElement = getByTestId("editor");

  expect(editorElement).toBeInTheDocument();
});

test("renders the preview", () => {
  const { getByTestId } = render(<App />);
  const previewElement = getByTestId("preview");

  expect(previewElement).toBeInTheDocument();
});
