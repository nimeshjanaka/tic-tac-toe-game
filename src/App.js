import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [WinningMessage, setWinningMessage] = useState("null");

  const message = "it is now " + go + " 's go";
  console.log(cells);

  const checkScore = () => {
    const WinningCombs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    WinningCombs.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMessage("Circle Wins!");
        return;
      }
    });

    WinningCombs.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("cross Wins!");
        return;
      }
    });
  };
  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            WinningMessage={WinningMessage}
          />
        ))}

       
      </div>
      <p> {WinningMessage || message}</p>
    </div>
  );
};

export default App;
