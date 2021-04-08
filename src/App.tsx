import { FC } from "react";
import { Route } from "react-router";

import { Home } from "./components/Home/Home";
import { Game } from "./components/Game/Game";
import { TotalScoreContext } from "./state/scoreContext";
import { useScore } from "./hooks/useScore";
import { EndGame } from "./components/EndGame/EndGame";

import './App.css';

export const App: FC = () => {
  const score = useScore();

  return (
    <TotalScoreContext.Provider value={score}>
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/end" component={EndGame} />
      </div>
    </TotalScoreContext.Provider>
  );
}

