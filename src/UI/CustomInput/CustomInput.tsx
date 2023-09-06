import React from 'react';
import s from './CustomInput.module.scss';

type Props = {
    width?: number
    height?: number
    place?: string
}
const CustomInput = ({width, height, place}: Props) => {
    return (
        <div className={s.cont} style={{width: `${width}px`, height: `${height}px`}}>
            <input className={s.inp} placeholder={place} type="text"/>
        </div>
    );
};

export default CustomInput;