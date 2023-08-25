import React from 'react';
import s from "./CustomWhiteSelectTitle.module.scss";

type Props = {
    title?: string
    options: string[]
    width?: number
}

const CustomWhiteSelectTitle = ({title, options, width}: Props) => {
    return (
        <div className={s.years} style={{width: width ? `${width}px` : ''}}>
            { title && <div>{title}</div>}
            <select>
                {options.map((el, index) => <option key={index}>{el}</option>)}
            </select>
        </div>
    );
};

export default CustomWhiteSelectTitle;