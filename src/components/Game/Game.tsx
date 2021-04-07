import { FC, useEffect, useState } from "react"
import classes from './Game.module.css';
import { PriceList } from "./PriceList/PriceList";
import { QuestionHolder } from "./QuestionHolder/QuestionHolder";

export const Game: FC = () => {
  const [questions, setQuestions] = useState([]);
  const [money, setMoney] = useState<Array<{ money: string, current: boolean, done: false }>>([]);
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const fetchQuestions = async () => {
      let data = await fetch("./gameConfig.json").then(res => res.json());

      const allMoney = data.questions.map((quess: any, index: number) => index === 0 ? { money: quess.money, current: true, done: false } : { money: quess.money, current: false, done: false });

      const allQuestions = data.questions.map((quess: any) => ({ question: quess.question, answers: quess.answers }));

      setQuestions(allQuestions)

      setMoney(allMoney);

      console.log(allMoney)
    }

    fetchQuestions();
  }, [])

  return (
    <div className={classes.gameWrapper}>
      <QuestionHolder questions={questions} stage={stage} />
      <PriceList money={money} stage={stage} />
    </div>
  )
}
