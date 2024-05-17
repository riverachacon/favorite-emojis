import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(icon) {
  return <Entry 
  emoji= {icon.emoji}
  name= {icon.name}
  meaning= {icon.meaning} />
}

function App() {
  return (
    <div>
      <h1>
        <span>my top emojis</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
