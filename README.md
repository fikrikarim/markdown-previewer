# Markdown Previewer

![markdown_previewer](https://i.imgur.com/rUO7bEb.gif)

## Some technical considerations

### Monaco Editor

[Monaco editor](https://github.com/microsoft/monaco-editor) is a widely used editor, as it's derived from Visual Studio Code. It has support for many languages and a good syntax highlighting. This might be overkill for this simple project. But I've used this editor in previous project and so far I have a good experience.

### React Markdown

[React Markdown](https://github.com/rexxars/react-markdown) is kinda the default library for rendering markdown into components/HTML

### Styling

For now because we don't have a lot of componenents, and the need of styling is minimum, we use the default `App.css`. When the project get bigger, maybe it's better to use styling library like [styled-components](https://styled-components.com/) or [emotion](https://github.com/emotion-js/emotion).
