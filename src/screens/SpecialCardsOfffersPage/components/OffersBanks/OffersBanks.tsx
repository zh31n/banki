import React from 'react';
import styles from './OffersBanks.module.scss';
import Items from '@/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { creditCardT } from '@/screens/CreditMapPage/CreditMapPage';
import { nanoid } from 'nanoid';

interface OffersBanksProps {
  cards: creditCardT[];
  title?: string;
}
const OffersBanks = (props: OffersBanksProps) => {
  const { cards, title } = props;

  return (
    <div className={styles.container}>
      {title ? <div className={styles.title}>{title}</div> : ''}
      <div className={styles.map_cont}>
        {cards.slice(0,12).map((item) => (
          <Items key={nanoid()} item={item} />
        ))}
      </div>
      <BlueBtn text={'Показать еще'} width={236} fSize={20} height={60} />
    </div>
  );
};

export default OffersBanks;
