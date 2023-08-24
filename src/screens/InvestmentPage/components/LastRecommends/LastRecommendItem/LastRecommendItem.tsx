import React from 'react';
import s from './LastRecommendItem.module.scss';
import Image, {StaticImageData} from "next/image";
import WhiteBorderBlueBtn from "@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn";

type Props = {
    img: StaticImageData
    name: string
    sub: string
    btn: string
}
const LastRecommendItem = ({img, name, sub, btn}: Props) => {
    return (
        <div className={s.item}>
            <div className={s.info}>
                <Image src={img} alt={'bank icon'}/>
                <div>
                    <span>{name}</span>
                    <span>{sub}</span>
                </div>
            </div>
            <div className={s.line}></div>
            <WhiteBorderBlueBtn text={'Купить акции'}/>
        </div>
    );
};

export default LastRecommendItem;