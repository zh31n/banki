import React from 'react';
import styles from './Navigation.module.scss'
import Parametrs from "@/screens/DebetCardsPage/components/Navigation/Parametrs/Parametrs";

const Navigation = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.text_container}>
                Главная / Карты / <mark>Дебетовые карты</mark>
            </div>
            <div className={styles.main_text_container}>
                <div className={styles.text_cont}>
                    Дебетовые карты <mark>в Москве</mark>
                </div>
                <div className={styles.little_text_cont}>
                    <p>На (НАЗВАНИЕ СЕРВИСА) есть 859 банковских карт от 202 банков. Также на сайте вы найдете
                        специальные предложения по дебетовым картам.</p>
                </div>
            </div>
            <Parametrs/>
        </div>
    );
};

export default Navigation;