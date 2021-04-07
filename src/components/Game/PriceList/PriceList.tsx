import classes from "./PriceList.module.css";

const formatter = new Intl.NumberFormat();


export const PriceList = ({ money }: any) => {
  return (
    <div className={classes.priceListWrapper}>
      {
        money && money.map((item: { money: string }) => {
          const correctPrice = parseInt(item.money);
          const price = formatter.format(correctPrice);

          return <div className={classes.priceItemWrapper}>
            <div className={`${classes.priceItemLine} ${classes.lineLeft}`}></div>
            <div className={classes.priceItem}>
              <p>${price}</p>
            </div>
            <div className={`${classes.priceItemLine} ${classes.lineRight}`}></div>
          </div>
        })
      }
    </div>
  )
}
