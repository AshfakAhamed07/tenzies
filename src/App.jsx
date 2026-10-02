import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function hold(id) {
    console.log(id);
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={hold} id={dieObj.id} />
  ));

  return (
    <main>
      <div className="container">{diceElements}</div>

      <button onClick={rollDice} className="roll-btn">
        Roll
      </button>
    </main>
  );
}
