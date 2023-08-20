import React from 'react';
import s from './OfferItem.module.scss';
import Image, {StaticImageData} from "next/image";

type Props = {
    img: StaticImageData
    name: string
    subtitle: string
    time?: number | undefined
    year_money?: number | undefined
    title_1?: string | undefined
    title1_key?: string | undefined
    title2?: string | undefined
    title2_key?: string | undefined
}

const OfferItem = ({img, name, subtitle, time, year_money, title_1, title1_key, title2, title2_key}: Props) => {
    return (
        <div className={s.offer_item}>
            <div className={s.inf}>
                <Image alt={'icon'} src={img}/>
                <div className={s.info}>
                    <div className={s.name}>{name}</div>
                    <div className={s.subtitle}>{subtitle}</div>
                </div>
            </div>
            <div className={s.line}></div>
            <div className={s.tarifs}>
                <div className={s.years}>
                    <div className={s.title}>{title_1 ? title_1 : 'Годовых'}</div>
                    <span>
                        {title1_key ? title1_key : 'до ' + year_money + ' %'}
                    </span>
                </div>
                <div className={s.years}>
                    <div className={s.title}>{title2 ? title2 : 'Срок'}</div>
                    <span>{title2_key ? title2_key : time + 'дн.'}</span>
                </div>
            </div>
        </div>
    );
};

export default OfferItem;