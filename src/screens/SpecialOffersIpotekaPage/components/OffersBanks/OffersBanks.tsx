import React from 'react';
import styles from './OffersBanks.module.scss'
import data from "@/core/data";
import Items from "@/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

const OffersBanks = () => {
  const dataMap = data.SpecialOffersCards.offers
  return (
    <div className={styles.container}>
      <div className={styles.map_cont}>
        {dataMap.map(el => <Items img={el.img}/>)}
      </div>
      <BlueBtn text={'Показать еще'} width={236} fSize={20} height={60}/>
    </div>
  );
};

export default OffersBanks;