import React from 'react';
import s from './NewsItem.module.scss';
import Image, {StaticImageData} from "next/image";
import smile from '@/assets/icons/Smile.svg';

interface NewsItemProps {
    item: NewsItemProps;
}

const NewsItem = (props: NewsItemProps) => {
    const {
        item: {
            title,
            text,
            image,
            id,
            subtitle,
        },
    } = props;

    return (
        <div className={s.item}>
            {image && (
                <Image alt={'icon'} src={image}/>
            )}
            <div className={s.info}>
                <div className={s.date}>30.06.2023</div>
                <span>
                    <Image src={smile} alt={'smile'}/>
                    <div>{124242}</div>
                </span>
            </div>
            <div className={s.text}>
                <mark>{title}</mark> {subtitle}
            </div>
            <div className={s.subtitle}>{text}</div>
            <div className={s.line}/>
            <div className={s.info} style={{marginTop: '1rem'}}>
                <div className={s.date}>30.06.2023</div>
                <span>
                    <Image src={smile} alt={'smile'}/>
                    <div>{124242}</div>
                </span>
            </div>
            <div className={s.text}>
                <mark>{title}</mark> {text}
            </div>
        </div>
    );
};

export default NewsItem;