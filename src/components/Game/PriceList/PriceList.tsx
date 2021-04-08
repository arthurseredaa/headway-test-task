import { FC, useContext, useEffect, useState } from "react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

import { TotalScoreContext } from "../../../state/scoreContext";
import { PriceListProps } from "../../../types/game";
import { MoneyItem } from "../../../types/moneyItem";
import { PriceItem } from "./PriceItem/PriceItem";

import classes from "./PriceList.module.css";

export const PriceList: FC<PriceListProps> = ({ money, openMenu }: PriceListProps) => {
  const { stage } = useContext(TotalScoreContext);
  const [hideMenu, setHideMenu] = useState(false);
  const size = useWindowWidth();

  useEffect(() => {
    if(size <= 1350) {
      setHideMenu(true);
    } else {
      setHideMenu(false);
    }
  }, [size]);

  return (
    <div className={`${classes.priceListWrapper} ${openMenu && classes.collapsedMenuOpen} ${!openMenu && hideMenu && classes.collapsedMenuClose}`}>
      {
        money && money.map((item: MoneyItem, index: number) => <PriceItem key={item.money} item={item} current={index === stage} />)
      }
    </div>
  )
}
