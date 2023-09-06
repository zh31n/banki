import React from 'react';
import styles from './Items.module.scss'
import Image, {StaticImageData} from "next/image";
import gazprom from "@/assets/icons/gasprom.svg"
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

type Props = {
    img: StaticImageData,
    imgBank?: StaticImageData
    name?: string
    sub?: string
    info?: string
    t1?: string
    t2?: string
    c1?: string
    c2?: string
    btntxt?: string
}

const Items = ({img, c1, imgBank, btntxt, c2, sub, t1, t2, name, info}: Props) => {
    return (
        <div className={styles.container}>
            <Image src={img} alt={''} width={279} height={165}/>
            <Image src={imgBank || gazprom} alt={''} width={40} height={40} className={styles.img}/>
            <div className={styles.content_container}>
                <p className={styles.text_main}>{name || 'Газпромбанк'}</p>
                <p className={styles.sub}>{sub || 'Акция «Путешествий с Level.Travel» с картой UnionPay от Газпромбанка'}</p>
                <p className={styles.blue_text}>{ info || 'Кэшбек до 10 000 ₽ за покупку тура'}</p>
                <div className={styles.blue_text_container}>
                    <div style={{width: '88px'}}>
                        <p className={styles.blue_text}>{ t1 || 'Обслуживание'}</p>
                        <p className={styles.text}>{ c1 || '0 ₽'}</p>
                    </div>
                    <div style={{width:'112px'}}>
                        <p className={styles.blue_text}>{ t2 || 'Кэшбек на все покупки'}</p>
                        <p className={styles.text}>{ c2 || '1,5%'}</p>
                    </div>
                </div>
                <BlueBtn text={ btntxt || 'Посмотреть'} width={231} height={40} fSize={16}/>
            </div>
        </div>
    );
};

export default Items;