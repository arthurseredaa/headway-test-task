import React, { FC, ReactNode } from "react"
import classes from "./Button.module.css";

interface ButtonProps {
  text?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  customClass?: string;
}

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
