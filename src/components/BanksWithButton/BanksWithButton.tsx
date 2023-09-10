import React from 'react';
import styles from './BanksWithButton.module.scss'
import BankCardItem from "@/components/BanksWithButton/BankCardItem/BankCardItem";
import {CardInterface} from "@/core/api/Cards";

interface BanksWithButtonProps {
    text: string;
    sub_value: string;
    cards: CardInterface[];
}

const BanksWithButton = (props: BanksWithButtonProps) => {
    const {
        text,
        sub_value,
        cards,
    } = props;

    return (
        <div className={styles.main_container}>
            <div className={styles.text_container}>
                <mark>{text}</mark> {sub_value}
            </div>
            <div className={styles.items_container}>
                {cards.map((item) => <BankCardItem item={item}/>)}
            </div>
        </div>
    );
};

export default BanksWithButton;