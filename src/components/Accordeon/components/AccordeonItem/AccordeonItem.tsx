import React from 'react';
import s from './AccordeonItem.module.scss';
import arr from "@/assets/icons/arr_d_spec.svg";
import Image from "next/image";

type Props = {
    numb:string
    sub:string
    text:string
}

const AccordeonItem = ({numb,sub,text}:Props) => {
    return (
        <div className={s.acc_item}>
            <div className={s.info}>
                <div>
                    <span>{numb}</span>
                    {sub}
                </div>
                <Image src={arr} alt={'стрелочка вниз'}/>
            </div>
            <div className={s.text} style={{display: 'none'}}>{text}</div>
        </div>
    );
};

export default AccordeonItem;