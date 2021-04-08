import { FC } from "react"
import { ButtonProps } from "../../../types/common";

import classes from "./Button.module.css";

export const Button: FC<ButtonProps> = ({ text, handleClick, children, customClass }: ButtonProps) => (
  <>
    {
      children ? (
        <button onClick={handleClick} className={`${classes.button}${customClass ? " " + customClass : ""}`}>{children}</button>
      ) : (
        <button onClick={handleClick} className={`${classes.button}${customClass ? " " + customClass : ""}`}>{text}</button>
      )
    }
  </>
)
