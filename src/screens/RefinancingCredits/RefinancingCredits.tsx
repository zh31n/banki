import React from 'react';
import s from './RefinancingCredits.module.scss';
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import IntroRefinancing from "@/screens/RefinancingCredits/components/IntroRefinancing/IntroRefinancing";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import ekspo from "@/assets/icons/banki_icon/ekspo.svg";
import spm from "@/assets/icons/banki_icon/spm.svg";
import psb from "@/assets/icons/banki_icon/psb.svg";
import sber from "@/assets/icons/banki_icon/sber_text.svg";
import tinkoff from "@/assets/icons/banki_icon/tinkoff_text.svg";
import norvik from "@/assets/icons/banki_icon/norvik.svg";
import OurStrongs from "@/components/OurStrongs/OurStrongs";
import w_1 from '@/assets/icons/w_1.svg';
import w_2 from '@/assets/icons/w_2.svg';
import w_3 from '@/assets/icons/w_3.svg';
import w_4 from '@/assets/icons/w_4.svg';
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

type itemT = {
    title: string
    sub: string
    img: string
    text: string
}
type quesT = {
    title: string
    text: string
}

const data: string[] = [ekspo, spm, psb, sber, tinkoff, norvik, norvik]
const ourData: itemT[] = [
    {img: w_1, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
    {img: w_2, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
    {img: w_3, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
    {img: w_4, title: 'Этап 1', sub: 'Заполнить анкету', text: 'Вы заполняете единую анкету – нужно всего 3 минуты.'},
]
const questData: quesT[] = [
    {title: 'Как я могу снизить плетеж с помощью рефинансирования?', text: ''},
    {title: 'Какие кредиты я могу рефинансировать?', text: ''},
    {title: 'Какие документы мне понадобятся?', text: ''},
]

const RefinancingCredits = () => {
    return (
        <PageWrapper>
            <IntroRefinancing/>
            <SliderBanksCons data={data}/>
            <OurStrongs/>
            <HowItWorks title={'Как работает '} sub={'сервис'} items={ourData}/>
            <FrequentQuestions title={'Важные вопросы'} items={questData}/>
        </PageWrapper>
    );
};

export default RefinancingCredits;