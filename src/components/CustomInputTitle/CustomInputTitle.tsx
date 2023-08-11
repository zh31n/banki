import React from 'react';
import s from "./CustomInputTitle.module.scss";

type Props = {
    title: string
    width?: number
}

const CustomInputTitle = ({title, width}: Props) => {
    return (
        <div className={s.years} style={{width: width ? `${width}px` : ''}}>
            <div>{title}</div>
            <input type="text"/>
        </div>
    );
};

export default CustomInputTitle;