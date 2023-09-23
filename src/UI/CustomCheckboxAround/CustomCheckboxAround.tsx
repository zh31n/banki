"use client"

import React from 'react';
import s from './CustomCheckboxAround.module.scss';

type Props = {
    type?: string
    checked: boolean,
    handleChecked?: React.Dispatch<boolean>;
}
const CustomCheckboxAround = ({type, checked, handleChecked}: Props) => {
    return (
        <>
            <input type={type || 'checkbox'} checked={checked} onChange={() => handleChecked(!checked)}
                   className={s.inp}/>
        </>
    );
};

export default CustomCheckboxAround;