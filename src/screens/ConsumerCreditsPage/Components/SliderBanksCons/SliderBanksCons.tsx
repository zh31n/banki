import React from 'react';
import s from "./SliderBanksCons.module.scss";
import BankImgItemSlideMap from "@/components/BankImgItemSlideMap/BankImgItemSlideMap";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import Image from "next/image";


const SliderBanksCons = ({data}) => {
    return (
        <div className={s.slider}>
            <BankImgItemSlideMap images={data}/>
            <Image src={arr_r} alr={'стрелка вправо'}/>
        </div>
    );
};

export default SliderBanksCons;