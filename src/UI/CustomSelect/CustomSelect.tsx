import React from 'react';
import s from './CustomSelect.module.scss';
import Image from "next/image";

type Props = {
    img: string
    options: string[]
}

const CustomSelect = ({img, options}:Props) => {

    const optionItems = options.map((el, index) => <option key={index}>{el}</option>)

    return (
        <div className={s.select}>
            <Image src={img} alt=""/>
            <select>{optionItems}</select>
        </div>
    );
};

export default CustomSelect;