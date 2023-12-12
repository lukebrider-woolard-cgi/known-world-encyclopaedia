import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import human from "../lore/Species/Human.md";
import "./App.css";

function App() {
  const [testText, setTestText] = useState("");

  useEffect(() => {
    fetch(human)
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
