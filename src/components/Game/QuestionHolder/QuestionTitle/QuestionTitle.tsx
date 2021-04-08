import { FC, useContext } from "react";
import { TotalScoreContext } from "../../../../state/scoreContext";
import { QuestionTitleProps } from "../../../../types/game";

import classes from "./QuestionTitle.module.css";

export const QuestionTitle: FC<QuestionTitleProps> = ({ titles }: QuestionTitleProps) => {
  const { stage } = useContext(TotalScoreContext);

  return (
    <h1 className={classes.question}>
      {
        titles.map((quess: string, index: number) => index === stage ? quess : null)
      }
    </h1>
  )
}
