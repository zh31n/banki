import React from 'react';
import styles from './BanksWithButton.module.scss'
import Items from "@/components/BanksWithButton/Items/Items";

type Props = {
    text: string
    sub_value: string
}

const BanksWithButton = ({text, sub_value}: Props) => {
    return (
        <div className={styles.main_container}>
            <div className={styles.text_container}>
                <p className={styles.blue_text}>{text}</p>
                <p className={styles.text}>{sub_value}</p>
            </div>
            <div className={styles.items_container}>
                <Items/>
            </div>
        </div>
    );
};

export default BanksWithButton;