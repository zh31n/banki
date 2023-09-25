import React from 'react';
import styles from './Navigation.module.scss'
import Parametrs from "@/screens/SpecialCardsOfffersPage/components/Navigation/Parametrs/Parametrs";
import data from "@/core/data";

const Navigation = ({data}) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.nav_container}>
        <p>Главная</p>
        <p>/</p>
        <p>Ипотека</p>
        <p>/</p>
        <p className={styles.grey_text}>Специальные предложения</p>
      </div>
      <div className={styles.main_cont}>
        <p className={styles.text}>Специальные</p>
        <p className={styles.blue_text}>предложения</p>
      </div>
      <Parametrs data={data}/>
    </div>
  );
};

export default Navigation;