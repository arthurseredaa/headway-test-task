import { FC } from "react";
import { Route } from "react-router";

import { Home } from "./components/Home/Home";

import './App.css';
import { Game } from "./components/Game/Game";

export const App: FC = () =>  {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </div>
  );
}

