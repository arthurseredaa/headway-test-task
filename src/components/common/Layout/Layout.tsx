import { FC } from "react";

import { Button } from "../Button/Button";
import { LayoutProps } from "../../../types/common";

import HandIcon from "../../../assets/images/hand.svg";
import classes from "./Layout.module.css";

export const Layout: FC<LayoutProps> = ({ buttonText, titleText, clickHandler, isStart }: LayoutProps) => {
  return (
    <div className={`${classes.homeContent} ${isStart ? classes.startBackground : null}`}>
      <img className={classes.handIcon} src={HandIcon} alt="Hand" />
      <div className={classes.titleWrapper}>
        <h1 className={classes.homeTitle}>{titleText}</h1>
        <Button customClass={classes.homeButton} handleClick={clickHandler} >{buttonText}</Button>
      </div>
    </div>
  )
}
