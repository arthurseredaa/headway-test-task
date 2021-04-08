import { FC, useContext, useState } from "react"
import { useHistory } from "react-router";

import { TotalScoreContext } from "../../state/scoreContext";
import { RectangleButtonProps } from "../../types/rectangleButton";

import classes from "./RectangleButton.module.css"



export const RectangleButton: FC<RectangleButtonProps> = ({ text, isCorrect, money }: RectangleButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { setCurrentScore, setCurrentStage, stage } = useContext(TotalScoreContext);

  const handleClick = () => {
    setIsClicked(true);
    if (isCorrect) {
      money.forEach((item, index) => {
        if (index === stage) {
          setCurrentScore(item.money);
        }
      });
    } else {
      setCurrentStage(12)
    }
    setTimeout(() => setCurrentStage(stage + 1), 500);
  }

  return (
    <div className={classes.rectangleButton}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={handleClick}>
      <svg width="25" height="2" viewBox="0 0 69 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M69 1H0" stroke={isHover && !isClicked ? "#FF8B37" : isClicked && isCorrect ? "#47D867" : isClicked && !isCorrect ? "#EC6259" : "#000"} />
      </svg>

      <svg width="389" height="72" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={isClicked && isCorrect ? "#E6FAEA" : isClicked && !isCorrect ? "#FDEEED" : isHover ? "#FFF3EB" : "white"} d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z" stroke={isHover && !isClicked ? "#FF8B37" : isClicked && isCorrect ? "#47D867" : isClicked && !isCorrect ? "#EC6259" : "#D0D0D8"} />
      </svg>
      <p>{text}</p>

      <svg width="25" height="2" viewBox="0 0 69 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M69 1H0" stroke={isHover && !isClicked ? "#FF8B37" : isClicked && isCorrect ? "#47D867" : isClicked && !isCorrect ? "#EC6259" : "#000"} />
      </svg>
    </div>
  )
}
