import React from 'react';
import s from './QuestionItem.module.scss';
import Image from "next/image";
import plus from '@/assets/icons/plus.svg';

type Props = {
    item: {
        text: string
        title: string
    }
}

const QuestionItem = ({item}: Props) => {
    return (
        <div className={s.item}>
            <div className={s.title}>{item.title}</div>
            <Image src={plus} alt='' />
        </div>
    );
};

export default QuestionItem;