import React from 'react';
import s from './FrequentQuestions.module.scss';
import QuestionItem from "@/components/QuestionItem/QuestionItem";

type Props = {
    title: string
    items: object[]
}

const FrequentQuestions = ({title, items}: Props) => {

    const questItems = items.map((el,index) => <QuestionItem key={index} item={el}/>)

    return (
        <div className={s.quests}>
            <div className={s.title}>{title}</div>
            <div className={s.questItems}>{questItems}</div>
        </div>
    );
};

export default FrequentQuestions;