import React, { useState } from "react";

import "./styles.css";
const EmojiDictionary = {
  "❤️": "Red Heart",
  "🤑": "Money-Mouth Face",
  "🔥": "Fire",
  "😈": "Smiling Face with Horns",
  "🙋": "Person Raising Hand",
};

var EmojisWeKnowList = Object.keys(EmojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputValueHandler(event) {
    var EmojiMeaning = EmojiDictionary[event.target.value];
    if (EmojiMeaning === undefined) {
      EmojiMeaning = "We donot have this in our database";
    }
    setMeaning(EmojiMeaning);
  }
  function clickEventHandler(getClickedIcon) {
    setMeaning(EmojiDictionary[getClickedIcon]);
  }
  return (
    <div className="App">
      <h1>inside Out</h1>

      <input className="App__Input" type="text" onChange={inputValueHandler} />
      <div className="App__Output">{meaning}</div>
      <p className="App__EmojiTitle">Emojis we know:</p>

      <div className="App__EmojiList">
        {EmojisWeKnowList.map((item) => {
          return (
            <span
              key={item}
              onClick={() => clickEventHandler(item)}
              className="App__EmojiList__Value"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
