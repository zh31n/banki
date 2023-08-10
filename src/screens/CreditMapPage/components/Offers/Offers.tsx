import React from "react";
import styles from "./Offers.module.scss";
import Image from "./Image";
import OfferItem from "../OffersItem/OffersItem";

type Props = {};

const Offers = (props: Props) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.count_container}>
        <div className={styles.right_container}>
          <p className={styles.blue}>223</p>
          <p>предложения</p>
        </div>
        <div className={styles.left_container}>
          <Image />
          <p>Сравнение</p>
        </div>
      </div>
      <OfferItem />
    </div>
  );
};

export default Offers;
