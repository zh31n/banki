import React from 'react';
import styles from './OffersBanks.module.scss'
import data from "@/core/data";
import Items from "@/screens/SpecialCardsOfffersPage/components/OffersBanks/Items/Items";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import Image, {StaticImageData} from "next/image";
import image from "@/assets/icons/image.png"

type offerT = {
    img: StaticImageData
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
type Props = {
    dataMap: offerT[]
    title?: string
}
const OffersBanks = ({dataMap, title}: Props) => {

    return (
        <div className={styles.container}>
            {title ? <div className={styles.title}>{title}</div> : ''}
            <div className={styles.map_cont}>
                {dataMap.map(el => <Items
                    img={el.img} sub={el.sub} name={el.name} imgBank={el.imgBank} t2={el.t2}
                    t1={el.t1} info={el.info} c2={el.c2}
                    c1={el.c1} btntxt={el.btntxt}/>)}
                <Image src={image} alt={'asd'} height={307} width={279} className={styles.image}/>
                <Image src={image} alt={'asd'} height={307} width={279} className={styles.image}/>
            </div>
            <BlueBtn text={'Показать еще'} width={236} fSize={20} height={60}/>
        </div>
    );
};

export default OffersBanks;