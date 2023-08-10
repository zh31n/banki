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
      text: "Без справок",
      active: false,
    },
    {
      text: "Наличными без комиссии",
      active: false,
    },
    {
      text: "Наличными без комиссии",
      active: false,
    },
    {
      text: " Бесплатное обслуживание",
      active: false,
    },
    {
      text: "С бонусами",
      active: false,
    },
  ];

  return (
    <div className={styles.main_container}>
      {data.map(el => (
        <ParametrsItem text={el.text} active={el.active} />
      ))}
      <ParametrsItem text="Все параметры" active={false} icon={true} />
    </div>
  );
};

export default Parametrs;
