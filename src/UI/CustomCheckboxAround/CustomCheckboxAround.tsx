"use client"

import React from 'react';
import s from './CustomCheckboxAround.module.scss';

type Props = {
    type?: string
    checked?: boolean,
    handleChecked?: React.Dispatch<boolean>
    value?: string
    setValue?: React.Dispatch<string>
    current?: string
}
const CustomCheckboxAround = ({type, checked, handleChecked, value, setValue, current}: Props) => {

    const hadleChange = () => {
        type === 'checkbox' ? handleChecked(!checked) : setValue(value)
    }

    return (
        <>
            <input type={type || 'checkbox'} checked={checked || value === current}
                   onChange={hadleChange}
                   className={s.inp}/>
        </>
    );
};

export default CustomCheckboxAround;