import React from 'react';
import s from "./SliderBanksCons.module.scss";
import BankImgItemSlideMap from "@/components/Banki/BankiImg/BankImgItemSlideMap/BankImgItemSlideMap";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import Image, {StaticImageData} from "next/image";

type Props = {
    data: StaticImageData[]
}

const SliderBanksCons = ({data}:Props) => {
    return (
        <div className={s.slider}>
            <BankImgItemSlideMap images={data}/>
            <Image src={arr_r} className={s.arr} alt={'стрелка вправо'}/>
        </div>
    );
};

export default SliderBanksCons;