import React from 'react';
import s from './BankImgItemSlide.module.scss';
import Image from "next/image";

type Props = {
    img:string
}

const BankImgItemSlide = ({img}:Props) => {
    return (
        <div className={s.item}>
            <Image src={img} alt={'иконка банка'} />
        </div>
    );
};

export default BankImgItemSlide;