import "./styles.css";
import { KeyboardEvent, useEffect, useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

export default function App() {
  let preTiles = new Array(30);
  preTiles.fill("");
  let [tiles, setTiles] = useState([...preTiles]);

  useEffect(() => console.log(tiles), [tiles]);

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    for (let i = 0; i < tiles.length; i++) {
      if ( 
        (tiles[i] === "" && e.key.match(/^[a-z]$/i)) ||
        e.key === "Backspace"
      ) {
        if (e.key === "Backspace") {
          if (!!tiles[i - 1]) {
            setTiles((prev) => [
              ...tiles.slice(0, i - 1),
              "",
              ...tiles.slice(i)
            ]);
          }
        } else {
          setTiles((prev) => [
            ...tiles.slice(0, i),
            e.key.toUpperCase(),
            ...tiles.slice(i + 1)
          ]);
          break;
        }
      } else {
        if (e.key === "Backspace") {
          if (!!tiles[i - 1]) {
            setTiles((prev) => [...tiles.slice(0, -1), ""]);
          }
        }
      }
    }
  };

  return (
    <div className="App" onKeyDown={keyDownHandler} tabIndex={0}>
      <Header />
      <Board tiles={tiles} keyDownHandler={keyDownHandler} />
    </div>
  );
}
