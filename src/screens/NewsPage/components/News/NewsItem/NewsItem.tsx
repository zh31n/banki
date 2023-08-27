import React from 'react';
import s from './NewsItem.module.scss';
import Image, {StaticImageData} from "next/image";
import smile from '@/assets/icons/Smile.svg';

type newsT = {
    title: string
    subtitle: string
    img: StaticImageData
    text: string
    date: string
    views: number
    date_t: string
    views_t: string,
    title_t: string,
    text_t: string,
}

const NewsItem = ({title, subtitle, img, views, date, text, date_t, views_t, title_t, text_t}: newsT) => {
    return (
        <div className={s.item}>
            <Image alt={'icon'} src={img}/>
            <div className={s.info}>
                <div className={s.date}>{date}</div>
                <span>
                    <Image src={smile} alt={'smile'}/>
                    <div>{views}</div>
                </span>
            </div>
            <div className={s.text}>
                <mark>{title}</mark> {subtitle}
            </div>
            <div className={s.subtitle}>{text}</div>
            <div className={s.line}></div>
            <div className={s.info} style={{marginTop: '1rem'}}>
                <div className={s.date}>{date_t}</div>
                <span>
                    <Image src={smile} alt={'smile'}/>
                    <div>{views_t}</div>
                </span>
            </div>
            <div className={s.text}>
                <mark>{title_t}</mark> {text_t}
            </div>
        </div>
    );
};

export default NewsItem;