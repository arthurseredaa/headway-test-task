import { FC, useContext } from "react";

import { TotalScoreContext } from "../../../state/scoreContext";
import { PriceListProps } from "../../../types/game";
import { MoneyItem } from "../../../types/moneyItem";
import { PriceItem } from "./PriceItem/PriceItem";

import classes from "./PriceList.module.css";

export const PriceList: FC<PriceListProps> = ({ money, openMenu }: PriceListProps) => {
  const { stage } = useContext(TotalScoreContext);;

  return (
    <div className={`${classes.priceListWrapper} ${openMenu ? classes.collapsedMenuOpen : classes.collapsedMenuClose}`}>
      {
        money && money.map((item: MoneyItem, index: number) => <PriceItem key={item.money} item={item} current={index === stage} />)
      }
    </div>
  )
}
