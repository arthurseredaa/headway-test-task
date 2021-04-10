import { MoneyItem } from "./moneyItem";

export interface PriceListProps {
  money: Array<MoneyItem>,
  openMenu: boolean,
  setOpenMenu: (open: boolean) => void
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
  answers: Array<Answer>;
  money: Array<MoneyItem>
}

export interface QuestionTitleProps {
  titles: Array<string>,
}

export interface Question {
  question: string;
  money: string;
  answers: Array<Answer>
}

export interface Answer {
  answer: string,
  isCorrect: boolean
}
