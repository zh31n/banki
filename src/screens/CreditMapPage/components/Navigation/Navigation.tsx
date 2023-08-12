import React from "react";
import styles from "./Navigation.module.scss";
import Parametrs from "./Parametrs/Parametrs";
import BackGround from "../BackGround/BackGround";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <div className={styles.top_container}>
          <p className={styles.black_text}>Главная</p>
          <p className={styles.black_text}>/</p>
          <p className={styles.black_text}>Карты</p>
          <p className={styles.black_text}>/</p>
          <p className={styles.grey_text}>Кредитные карты</p>
        </div>
        <div className={styles.middle_container}>
          <p className={styles.bold_text}>Кредитные карты</p>
          <p className={styles.blue_text}>в Москве</p>
        </div>
        <div className={styles.bottom_container}>
          В данном разделе можно найти предложения банков, сравнить условия,
          изучить отзывы и оформить онлайн-заявку.
        </div>
        <Parametrs />
      </div>
    </div>
  );
};

export default Navigation;
