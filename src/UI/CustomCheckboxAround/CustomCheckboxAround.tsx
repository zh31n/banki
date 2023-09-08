"use client"

import React from 'react';
import s from './CustomCheckboxAround.module.scss';

type Props = {
    type?: string
    checked:boolean
}
const CustomCheckboxAround = ({type,checked}: Props) => {
    return (
        <>
            <input type={type ? type : 'checkbox'} checked={checked} onChange={() => {}} className={s.inp}/>
        </>
    );
};

export default CustomCheckboxAround;