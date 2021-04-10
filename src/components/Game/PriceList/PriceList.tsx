import { FC, useContext, useEffect, useState } from "react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

import { TotalScoreContext } from "../../../state/scoreContext";
import { PriceListProps } from "../../../types/game";
import { MoneyItem } from "../../../types/moneyItem";
import { PriceItem } from "./PriceItem/PriceItem";

import classes from "./PriceList.module.css";

export const PriceList: FC<PriceListProps> = ({ money, openMenu, setOpenMenu }: PriceListProps) => {
  const { stage } = useContext(TotalScoreContext);
  const [collapseMenu, setCollapse] = useState(false);
  const size = useWindowWidth();

  useEffect(() => {
    if (size <= 1350) {
      setCollapse(true);
    } else {
      setCollapse(false);
      setOpenMenu(false);
    }
  }, [size, setOpenMenu]);

  return (
    <div className={`${classes.priceListWrapper} ${openMenu && classes.collapsedMenuOpen} ${!openMenu && collapseMenu && classes.collapsedMenuClose}`}>
      {
        money && money.map((item: MoneyItem, index: number) => <PriceItem key={item.money} item={item} current={index === stage} />)
      }
    </div>
  )
}
