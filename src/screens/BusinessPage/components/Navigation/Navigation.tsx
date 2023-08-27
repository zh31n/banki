import React from 'react';
import styles from './Navigation.module.scss'
import Parametrs from "@/screens/BusinessPage/components/Navigation/Parametrs/Parametrs";


const Navigation = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.navigation_container}>
                <p className={styles.text}>Главная</p>
                <p className={styles.text}>/</p>
                <p className={styles.text}>Бизнес</p>
                <p className={styles.text}>/</p>
                <p className={styles.grey_text}>Все продукты</p>
            </div>
            <div className={styles.text_container}>
                <p className={styles.blue_text}>Бизнес</p>
                <p className={styles.text}>В этом разделе вы сможете подобрать инструменты для развития вашего бизнеса</p>
            </div>
            <Parametrs />
        </div>
    );
};

export default Navigation;