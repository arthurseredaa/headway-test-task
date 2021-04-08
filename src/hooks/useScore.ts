import { useCallback, useState } from 'react';
import { ScoreContext } from '../types/scoreContext';

export const useScore = (): ScoreContext => {
  const [score, setScore] = useState({
    score: "0",
    stage: 0
  });

  const setCurrentScore = useCallback((currentScore: string): void => setScore((prev) => ({...prev, score: currentScore})), []);

  const setCurrentStage = useCallback((currentStage: number): void => setScore((prev) => ({...prev, stage: currentStage})), []);

  return {
    score: score.score,
    setCurrentScore,
    stage: score.stage,
    setCurrentStage
  }
}
