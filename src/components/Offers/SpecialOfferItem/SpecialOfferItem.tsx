import React from 'react';
import s from './SpecialOfferItem.module.scss';
import Image, {StaticImageData} from "next/image";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";


type Props = {
    name: string
    img: StaticImageData
    bankImg: StaticImageData
    bonus: string
    bet: number
    days: string
}

const SpecialOfferItem = ({name, bet, days, bankImg, img, bonus}: Props) => {
    return (
        <div className={s.item}>
            <Image alt={'icon'} className={s.img} src={img}/>
            <div className={s.item_info}>
                <Image alt={'icon'} src={bankImg}/>
                <div className={s.name}>{name}</div>
                <div className={s.bonus} style={{height:'12px'}}>{bonus}</div>
                <div className={s.line}></div>
                <div className={s.info_more}>
                    <div className={s.info_item}>
                        <div className={s.title}>Ставка</div>
                        <span>до {bet}%</span>
                    </div>
                    <div className={s.info_item}>
                        <div className={s.title}>Срок</div>
                        <span>{days}</span>
                    </div>
                </div>
                <BlueBtn text={'Посмотреть'} width={230} height={40} fSize={16}/>
            </div>
        </div>
    );
};

export default SpecialOfferItem;