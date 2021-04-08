import { FC, useContext, useEffect, useState } from "react"
import { Redirect } from "react-router";

import { TotalScoreContext } from "../../state/scoreContext";
import { PriceList } from "./PriceList/PriceList";
import { QuestionHolder } from "./QuestionHolder/QuestionHolder";
import { MoneyItem } from "../../types/moneyItem";

import BurgerIcon from "../../assets/images/burger-menu.svg";
import CrossIcon from "../../assets/images/cross.svg";
import classes from './Game.module.css';

export const Game: FC = () => {
  const [questions, setQuestions] = useState([]);
  const [money, setMoney] = useState<Array<MoneyItem>>([]);
  const [openMenu, setOpenMenu] = useState(false);
  const { stage } = useContext(TotalScoreContext);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let data = await fetch("./gameConfig.json").then(res => res.json());

        const allMoney = data.questions.map((quess: any, index: number) => index === 0 ? { money: quess.money, current: true, done: false } : { money: quess.money, current: false, done: false });

        const allQuestions = data.questions.map((quess: any) => ({ question: quess.question, answers: quess.answers }));

        setQuestions(allQuestions)

        setMoney(allMoney);
      } catch(e) {
        console.log(`Error when fetching data!`, e);
      }
    }

    fetchQuestions();
  }, [])

  return (
    <div className={classes.gameWrapper}>
      <div className={classes.burgerIcon} onClick={() => !openMenu ? setOpenMenu(true) : setOpenMenu(false)}>
        <img src={!openMenu ? BurgerIcon : CrossIcon} alt="burger-menu" width="16" />
      </div>
      {
        openMenu && <PriceList money={money} openMenu={openMenu} />
      }
      {
        (stage === 12 ) || ( money.length > 0) && (stage + 1 > money.length) ? (
          <Redirect to="/end" />
        ) : (
          <>
            {
              !openMenu && <QuestionHolder questions={questions} money={money} />
            }
            {
              !openMenu && <PriceList money={money} />
            }
          </>
        )
      }
    </div >
  )
}
