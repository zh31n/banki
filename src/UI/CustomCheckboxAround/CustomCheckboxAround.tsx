import React from 'react';
import s from './CustomCheckboxAround.module.scss';

type Props = {
    type?: string
}
const CustomCheckboxAround = ({type}: Props) => {
    return (
        <>
            <input type={type ? type : 'checkbox'} className={s.inp}/>
        </>
    );
};

export default CustomCheckboxAround;