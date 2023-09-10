import React from "react";
import styles from "./Offers.module.scss";
import Image from "./Image";
import OfferItem from "../OffersItem/OffersItem";
import {CardInterface} from "@/core/api/Cards";

interface OffersProps {
    cards: CardInterface[];
}

const Offers = (props: OffersProps) => {
    const {
        cards,
    } = props;

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
        {cards.map((item) => {
            return (
                <OfferItem item={item}/>
            )
        })}
    </div>
  );
};

export default Offers;
