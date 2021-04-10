import { MoneyItem } from "./moneyItem";

export interface RectangleButtonProps {
  text: string;
  isCorrect: boolean;
  money: Array<MoneyItem>;
  letterIndex: number;
}
