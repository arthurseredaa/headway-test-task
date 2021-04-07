import { FC, useEffect, useState } from "react"
import classes from './Game.module.css';
import { PriceList } from "./PriceList/PriceList";

export const Game: FC = () => {
  const [questions, setQuestions] = useState();
  const [money, setMoney] = useState<Array<{ money: string, current: boolean, done: false }>>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      let data = await fetch("./gameConfig.json").then(res => res.json());
      const allMoney = data.questions.map((quess: any, index: number) => {
        if (index === 0) {
          return { money: quess.money, current: true, done: false }
        } else {
          return { money: quess.money, current: false, done: false }
        }
      });

      setMoney(allMoney);
    }

    fetchQuestions();
  }, [])

  return (
    <div className={classes.gameWrapper}>
      <div>
        here will be answers
      </div>
      <PriceList money={money} />
    </div>
  )
}
