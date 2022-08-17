import React from "react";
import NameAdder from "./NameAdder.jsx";
import Game from "./Game.jsx";
import Players from "./Players.jsx";

export default function AppPresenter({ names }) {
  return (
    <div>
      <h1>Tic Tac Toe!</h1>
      <Players />
      {names.length < 2 ? <NameAdder /> : <Game />}
    </div>
  );
}
