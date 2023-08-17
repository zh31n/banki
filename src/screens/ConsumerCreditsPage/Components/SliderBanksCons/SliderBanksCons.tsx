import React from 'react';
import s from "./SliderBanksCons.module.scss";
import BankImgItemSlideMap from "@/components/Banki/BankiImg/BankImgItemSlideMap/BankImgItemSlideMap";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import Image from "next/image";

type Props = {
    data: string[]
}

const SliderBanksCons = ({data}:Props) => {
    return (
        <div className={s.slider}>
            <BankImgItemSlideMap images={data}/>
            <Image src={arr_r} alt={'стрелка вправо'}/>
        </div>
    );
};

export default SliderBanksCons;