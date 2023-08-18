import React from 'react';
import s from './PopularOfferItem.module.scss';
import Image, {StaticImageData} from "next/image";

type Props = {
    active:boolean
    img:StaticImageData
    title:string
    sub:string
}
const PopularOfferItem = ({active,img,sub,title}:Props) => {
    return (
        <div className={s.item} style={{
            border: active ? '1.242px solid #4DA7FF' : '',
            background: active ? 'rgba(204, 230, 255, 0.40)' : ''
        }}>
            <div className={s.info}>
                <Image src={img} alt={'bank icon'}/>
                <div>
                    <span>{title}</span>
                    <span>{sub}</span>
                </div>
            </div>
        </div>
    );
};

export default PopularOfferItem;