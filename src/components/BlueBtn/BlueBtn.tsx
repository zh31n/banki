import React from 'react';
import s from './BlueBtn.module.scss';

type Props = {
    text:string,
    width:number
}

const BlueBtn = ({text,width}:Props) => {
    return (
        <div className={s.btn} style={{width:`${width}px`}}>
            {text}
        </div>
    );
};

export default BlueBtn;