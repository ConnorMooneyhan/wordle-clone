import { KeyboardEvent } from "react";

interface boardProps {
  keyDownHandler: (e: KeyboardEvent<HTMLDivElement>) => void;
  tiles: string[];
}

const Board = (props: boardProps) => {
  const tiles = props.tiles;

  return (
    <div className="board">
      {tiles.map((letter, index) => (
        <div className="tile" key={index}>
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Board;
