import React from 'react';
import s from './CreditRating.module.scss';
import PageWrapper from "@/containers/PageWrapper";
import IntroCreditRating from "@/screens/CreditRating/components/IntroCreditRating/IntroCreditRating";
import Image from "next/image";

const CreditRating = () => {
    return (
        <PageWrapper>
            <IntroCreditRating/>
            <div className={s.forWhat}>
                <div className={s.title}>Для чего нужен <mark>кредитный рейтинг?</mark></div>
                <div className={s.items_cont}>
                    <div className={s.item}>
                        <Image />
                        <div className={s.title}>Оцените свои шансы на получение кредита</div>
                        <p className={s.sub}>
                            Кредитный рейтинг - это балл, рассчитанный на основе кредитной истории заемщика. Чем выше
                            балл, тем выше вероятность получить кредит.
                        </p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CreditRating;