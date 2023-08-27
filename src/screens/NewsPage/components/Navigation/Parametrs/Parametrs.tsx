import React from "react";
import styles from "./Parametrs.module.scss";
import ParametrsItem from "./ParametrsItem/ParametrsItem";

type Props = {};

const Parametrs = (props: Props) => {

  const data = [
    {
      text: "Все продукты",
      active: true,
    },
    {
      text: "Расчетный счет (РКО)",
      active: false,
    },
    {
      text: "Кредиты",
      active: false,
    },
    {
      text: "Бизнес карты",
      active: false,
    },
  ];

  return (
    <div className={styles.main_container}>
      {data.map(el => (
        <ParametrsItem text={el.text} active={el.active} />
      ))}
    </div>
  );
};

export default Parametrs;
