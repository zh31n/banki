import React from 'react';
import s from "./CustomInputDateTitle.module.scss";

type Props = {
    title: string
    width?: number
}

const CustomInputDateTitle = ({title, width}: Props) => {
    return (
        <div className={s.years} style={{width: width ? `${width}px` : ''}}>
            <div>{title}</div>
            <input type="date"/>
        </div>
    );
};

export default CustomInputDateTitle;