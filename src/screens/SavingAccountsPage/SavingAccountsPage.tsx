import React from 'react';
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Intro from "@/screens/SavingAccountsPage/components/Intro/Intro";
import s from './SavingAccountsPage.module.scss';
import Bonus from "@/screens/SavingAccountsPage/components/Bonus/Bonus";
import Deposits from "@/screens/SavingAccountsPage/components/Deposits/Deposits";
import OfferMoth from "@/components/OfferMoth/OfferMoth";
import loc_bank from "@/assets/icons/banki_icon/loco.svg";
import Feedback from "@/components/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import TopBanks from "@/components/TopBanks/TopBanks";


type offersT = {
    name: string
    subtitle: string
    img: string
    time: number
    year_money: number
}
type questT = {
    title: string
    items: object[]
}
type banksT = {
    title: string
    sub: string
    stavka: number
    time: number
    money: string
    osob: string
}


const questions: questT = {
    title: 'Частые вопросы',
    items: [
        {title: 'Каталоги', text: ''},
        {title: 'Подробнее', text: ''},
        {title: 'Эксперты направления вклады и депозиты', text: ''},
        {title: 'Накопительные счета в городах', text: ''},
        {title: 'Предложения в банках', text: ''},
        {title: 'Задать вопрос о вкладах', text: ''},
    ]
}
const offers: offersT[] = [
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10}
]
const banks: banksT[] = [
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
    {title: 'Локо-Банк', stavka: 10.1, sub: 'Добро Пожаловать. Локо', money: '5000 — 5 млн.', osob: 'онлайн', time: 370},
]

const SavingAccountsPage = () => {
    return (
        <PageWrapper>
            <Intro/>
            <Bonus/>
            <Deposits/>
            <OfferMoth offers={offers}/>
            <Feedback title={'Отзывы'} sub={'о вкладах'}/>
            <FrequentQuestions title={'Частые вопросы'} items={questions.items}/>
            <TopBanks banks={banks} />
        </PageWrapper>
    );
};

export default SavingAccountsPage;