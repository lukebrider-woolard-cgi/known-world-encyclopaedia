import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import notes from "../lore/D&D/Planning/Ideas and Notes.md";
import "./App.css";

function App() {
  const [testText, setTestText] = useState("");

  useEffect(() => {
    fetch(notes)
      .then((res) => res.text())
      .then((text) => setTestText(text));
  }, []);

  return (
    <>
      <h1>Welcome to the Encyclopaedia of the Known World</h1>
      <div className="content">
        <Markdown>{testText}</Markdown>
      </div>
      <p>The Known World© - Luke Brider-Woolard 2013</p>
    </>
  );
}

export default App;
