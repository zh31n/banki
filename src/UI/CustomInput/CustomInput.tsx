import React from 'react';
import s from './CustomInput.module.scss';

type Props = {
    width?:number
    height?:number
}
const CustomInput = ({width, height}:Props) => {
    return (
        <div className={s.cont} style={{width: `${width}px`, height: `${height}px`}}>
            <input className={s.inp} type="text"/>
        </div>
    );
};

export default CustomInput;