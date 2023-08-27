import React from "react";
import styles from "./Parametrs.module.scss";
import ParametrsItem from "./ParametrsItem/ParametrsItem";

type Props = {};

const Parametrs = (props: Props) => {
  const data = [
    {
      text: "Все",
      active: true,
    },
    {
      text: "Кэшбек",
      active: false,
    },
    {
      text: "Баллы",
      active: false,
    },
    {
      text: "Мили",
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
