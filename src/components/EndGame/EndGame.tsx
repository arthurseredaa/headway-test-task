import { FC, useContext } from "react";
import { useHistory } from "react-router"

import { TotalScoreContext } from "../../state/scoreContext";
import { Layout } from "../common/Layout/Layout"

import { formatter } from "../../helpers/formatCurrency";


export const EndGame: FC = () => {
  const history = useHistory();
  const { score, setCurrentScore, setCurrentStage } = useContext(TotalScoreContext);

  const handleClick = () => {
    history.push("/game");
    setCurrentScore("0");
    setCurrentStage(0)
  }

  const totalScoreTitle = `$${formatter(+score)} earned`

  return <Layout titleText={totalScoreTitle} buttonText="Try again" clickHandler={handleClick} />
}
