import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(icon) {
  return <Entry
  key = {icon.id} 
  emoji= {icon.emoji}
  name= {icon.name}
  meaning= {icon.meaning} />
}
console.log(emojipedia)

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
