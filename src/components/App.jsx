import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEmoji(emojiterm) {
  return (
    <Entry
      id={emojiterm.id}
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      meaning={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
