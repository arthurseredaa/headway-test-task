import { Button } from "../common/Button/Button"

import classes from "./Home.module.css";

import HandIcon from "../../assets/images/hand.svg";
import { useHistory } from "react-router";


export const Home = () => {
  const history = useHistory();

  return (
    <div className={classes.homeContent}>
      <img className={classes.handIcon} src={HandIcon} alt="Hand" />
      <div className={classes.titleWrapper}>
        <h1 className={classes.homeTitle}>Who wants to be a millionaire?</h1>
        <Button customClass={classes.homeButton} handleClick={() => history.push("/game")} >Start</Button>
      </div>
    </div>
  )
}
