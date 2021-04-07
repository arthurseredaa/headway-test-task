import { FC } from "react"
import classes from "./QuestionHolder.module.css"

interface QuestionHolderProps {
  questions: any,
  stage: number,
}

export const QuestionHolder: FC<QuestionHolderProps> = ({ questions, stage }: QuestionHolderProps) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.question}>
        {
          questions.map((quess: any, index: number) => index === stage ? quess.question : null)
        }
      </h1>
    </div>
  )
}
