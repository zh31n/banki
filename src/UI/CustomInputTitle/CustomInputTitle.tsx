import React from 'react';
import s from "./CustomInputTitle.module.scss";

type Props = {
    title: string
    width?: number
    place?: string
    colorTitle?: string
}

const CustomInputTitle = ({title, width, place, colorTitle}: Props) => {
    return (
        <div className={s.years} style={{width: width ? `${width}px` : ''}}>
            <div style={{color: `${colorTitle}`}}>{title}</div>
            <input type="text" placeholder={place}/>
        </div>
    );
};

export default CustomInputTitle;