import React from 'react';
import s from './CreditRating.module.scss';
import PageWrapper from "@/containers/PageWrapper";
import IntroCreditRating from "@/screens/CreditRating/components/IntroCreditRating/IntroCreditRating";
import Image from "next/image";
import for_what from '@/assets/icons/for_what_2.svg';
import for_what_2 from '@/assets/icons/for_what_1.svg';
import ForWhat from "@/screens/CreditRating/components/ForWhat/ForWhat";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import w_3 from "@/assets/icons/w_3.svg";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

type workT = {
    img: string
    title: string
    sub: string
    text: string
}
type questT = {
    title: string
    text: string
}
type Props = {
    data: {
        worksData: workT[],
        questData: questT[]
    }
}

const CreditRating = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroCreditRating/>
            <ForWhat/>
            <HowItWorks title={'Как работает'} sub={' сервис'} items={data.worksData}/>
            <FrequentQuestions title={'Частые вопросы'} items={data.questData}/>
        </PageWrapper>
    );
};

export default CreditRating;