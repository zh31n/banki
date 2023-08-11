import React from 'react';
import s from "./HowItWorksItem.module.scss";
import Image from "next/image";

type Props = {
    img: string
    title: string
    sub: string
    text: string
}

const HowItWorksItem = ({img, title, sub, text}: Props) => {
    return (
        <div className={s.work_item}>
            <div className={s.info}>
                <div className={s.img}>
                    <Image src={img} alt={'иконка наших сторон'}/>
                </div>
                <div className={s.name}>
                    <mark>{title}</mark>
                    <br/>
                    {sub}
                </div>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
};

export default HowItWorksItem;