import { MoneyItem } from "./moneyItem";

export interface PriceListProps {
  money: Array<MoneyItem>,
  openMenu?: boolean
}

export interface PriceItemProps {
  item: MoneyItem,
  current: boolean
}

export interface QuestionHolderProps {
  questions: any,
  money: Array<MoneyItem>,
}

export interface AnswersProps {
  answers: Array<{ answer: string, isCorrect: boolean }>;
  money: Array<MoneyItem>
}

export interface QuestionTitleProps {
  titles: Array<string>,
}

export interface Question {
  question: string;
  answers: Array<{answer: string, isCorrect: true}>
}
