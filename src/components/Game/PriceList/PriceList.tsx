import { MoneyItem } from "../../../types";
import { PriceItem } from "./PriceItem/PriceItem";
import classes from "./PriceList.module.css";

interface PriceListProps {
  money: Array<MoneyItem>,
  stage: number
}

export const PriceList = ({ money, stage }: PriceListProps) => {
  return (
    <div className={classes.priceListWrapper}>
      {
        money && money.map((item: MoneyItem, index: number) => <PriceItem key={item.money} item={item} current={index === stage}  />)
      }
    </div>
  )
}
