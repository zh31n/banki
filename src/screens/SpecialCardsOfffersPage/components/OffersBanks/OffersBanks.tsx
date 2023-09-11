import React from 'react';
import styles from './OffersBanks.module.scss'
import Items from "@/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import Image from "next/image";
import image from "@/assets/icons/image.png"
import {CardInterface} from "@/core/services/Cards";

interface OffersBanksProps {
    cards: CardInterface[];
    title?: string;
}
const OffersBanks = (props: OffersBanksProps) => {
    const {
        cards,
        title,
    } = props;

    return (
        <div className={styles.container}>
            {title ? <div className={styles.title}>{title}</div> : ''}
            <div className={styles.map_cont}>
                {cards.map(item => <Items key={item.id} item={item}/>)}
                <Image src={image} alt={'asd'} height={307} width={279} className={styles.image}/>
                <Image src={image} alt={'asd'} height={307} width={279} className={styles.image}/>
            </div>
            <BlueBtn text={'Показать еще'} width={236} fSize={20} height={60}/>
        </div>
    );
};

export default OffersBanks;