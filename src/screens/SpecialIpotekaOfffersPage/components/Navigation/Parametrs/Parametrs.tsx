import React from "react";
import styles from "./Parametrs.module.scss";
import ParametrsItem from "./ParametrsItem/ParametrsItem";

type Props = {};

const Parametrs = (props: Props) => {
  const data = [
    {
      text: "Все",
      active: false,
    },
    {
      text: "Вклады",
      active: false,
    },
    {
      text: "Ипотека",
      active: false,
    },
    {
      text: "Кредитные карты",
      active: false,
    },
    {
      text: "Дебетовые карты",
      active: true,
    },
    {
      text: "Инвестиции",
      active: false,
    }, {
      text: "Страхование",
      active: false,
    },
  ];

  return (
    <div className={styles.main_container}>
      {data.map(el => (
        <ParametrsItem text={el.text} active={el.active}/>
      ))}
    </div>
  );
};

export default Parametrs;
