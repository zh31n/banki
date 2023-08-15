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
            text: "Карты МИР",
            active: false,
        },
        {
            text: "Карты Union Pay",
            active: false,
        },
        {
            text: "Бесплатное обслуживание",
            active: false,
        },
        {
            text: "Кэшбэк рублями",
            active: false,
        },
        {
            text: "Супермаркеты",
            active: false,
        }, {
            text: "Транспорт и АЗС",
            active: false,
        },
    ];

    return (
        <div className={styles.main_container}>
            {data.map(el => (
                <ParametrsItem text={el.text} active={el.active}/>
            ))}
            <ParametrsItem text="Все параметры" active={false} icon={true}/>
        </div>
    );
};

export default Parametrs;
