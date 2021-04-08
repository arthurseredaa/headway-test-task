export interface ScoreContext {
  score: string;
  setCurrentScore: (newScore: string) => void;
  stage: number;
  setCurrentStage: (newStage: number) => void;
}
