import { FC, useContext } from "react"

import { RectangleButton } from "../../../RectangleButton/RectangleButton"
import { TotalScoreContext } from "../../../../state/scoreContext"
import { AnswersProps } from "../../../../types/game"

import classes from "./Answers.module.css"

export const Answers: FC<AnswersProps> = ({ answers, money }: AnswersProps) => {
  const { stage } = useContext(TotalScoreContext);

  return (
    <div className={classes.wrapper}>
      {answers.map((item: any, index: number) => {
        return stage === index ? item.map((answer: any, i: number) => <RectangleButton key={i} money={money} text={answer.answer} isCorrect={answer.isCorrect} />) : null
      })}
    </div>
  )
}
