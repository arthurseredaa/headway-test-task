import { createContext } from 'react';
import { ScoreContext } from '../types/scoreContext';

const SCORE_DEFAULT_VALUE = {
  score: "0",
  setCurrentScore: () => { },
  stage: 0,
  setCurrentStage: () => { },

}

export const TotalScoreContext = createContext<ScoreContext>(SCORE_DEFAULT_VALUE);
