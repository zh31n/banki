import React from 'react';
import styles from './Items.module.scss'
import Image from "next/image";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {CardInterface} from "@/core/api/Cards";
import mockOfferImage from "@/assets/icons/offer_img1.png";
import mockBankImage from "@/assets/icons/gasprom.svg"

interface ItemsProps {
    item: CardInterface;
}

const Items = (props: ItemsProps) => {
    const {
        item: {
            region,
            since,
            image,
            name = 'Газпромбанк',
            license,
            id,
            form,
            address,
            rating,
        },
        sub = 'Акция «Путешествий с Level.Travel» с картой UnionPay от Газпромбанка',
        info = 'Кэшбек до 10 000 ₽ за покупку тура',
        t1 = 'Обслуживание',
        c1 = '0 ₽',
        t2 = 'Кэшбек на все покупки',
        c2 = '1,5%',
        btntxt = 'Посмотреть',
    } = props;

    return (
        <div className={styles.container}>
            <Image src={image || mockOfferImage} alt={''} width={279} height={165}/>
            <Image src={mockBankImage} alt={''} width={40} height={40} className={styles.img}/>
            <div className={styles.content_container}>
                <p className={styles.text_main}>{name}</p>
                <p className={styles.sub}>{sub}</p>
                <p className={styles.blue_text}>{info}</p>
                <div className={styles.blue_text_container}>
                    <div style={{width: '88px'}}>
                        <p className={styles.blue_text}>{t1}</p>
                        <p className={styles.text}>{c1}</p>
                    </div>
                    <div style={{width:'112px'}}>
                        <p className={styles.blue_text}>{t2}</p>
                        <p className={styles.text}>{c2}</p>
                    </div>
                </div>
                <BlueBtn text={btntxt} width={231} height={40} fSize={16}/>
            </div>
        </div>
    );
};

export default Items;