import React from 'react';
import s from "@/components/Feedback/Feedback.module.scss";

const TitleMarkLast = ({title, sub}) => {
    return (
        <div className={s.title}>
            {title} <mark>{sub}</mark>
        </div>
    );
};

export default TitleMarkLast;