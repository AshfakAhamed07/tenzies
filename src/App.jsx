import Die from "./Die";
import { useState } from "react";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  const diceElements = dice.map(dieObj => <Die value={dieObj.value} />)

  return (
    <main>
      <div className="container">{diceElements}</div>

      <button onClick={rollDice} className="roll-btn">
        Roll
      </button>
    </main>
  );
}
