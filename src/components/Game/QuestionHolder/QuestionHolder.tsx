import { FC } from "react"

import { Answers } from "./Answers/Answers"
import { QuestionTitle } from "./QuestionTitle/QuestionTitle"
import { Question, QuestionHolderProps } from "../../../types/game"

import classes from "./QuestionHolder.module.css"

export const QuestionHolder: FC<QuestionHolderProps> = ({ questions, money }: QuestionHolderProps) => {
  const titles = questions.map((quess: Question) => quess.question);
  const answers = questions.map((quess: Question) => quess.answers);

  return (
    <div className={classes.wrapper}>
      <QuestionTitle titles={titles} />
      <Answers answers={answers} money={money} />
    </div>
  )
}
