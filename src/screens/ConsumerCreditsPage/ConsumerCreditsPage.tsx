import React from 'react';
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import IntroConsumer from "@/screens/ConsumerCreditsPage/Components/IntroConsumer/IntroConsumer";
import Bonus from "@/components/Bonus/Bonus";
import ekspo from '@/assets/icons/banki_icon/ekspo.svg';
import spm from '@/assets/icons/banki_icon/spm.svg';
import psb from '@/assets/icons/banki_icon/psb.svg';
import sber from '@/assets/icons/banki_icon/sber_text.svg';
import tinkoff from '@/assets/icons/banki_icon/tinkoff_text.svg';
import norvik from '@/assets/icons/banki_icon/norvik.svg';
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import s from './ConsumerCreditsPage.module.scss';
import loco from "@/assets/icons/banki_icon/loco.svg";
import OffersBanks from "@/components/OffersBanks/OffersBanks";
import tinkoff_i from '@/assets/icons/banki_icon/tinkoff.svg';
import alfa from '@/assets/icons/banki_icon/alfa.svg';
import otkr from '@/assets/icons/banki_icon/otkritie.svg';
import vtb from '@/assets/icons/banki_icon/vtb.svg';
import OfferMoth from "@/components/OfferMoth/OfferMoth";
import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import money_i from '@/assets/icons/Banknote_icon.svg';
import sprav from '@/assets/icons/Clipboard_Check_icon.svg';
import home_i from '@/assets/icons/home_icon.svg';
import swit from '@/assets/icons/Restart_icon.svg';
import smar from '@/assets/icons/Smartphone_Rotate_Angle.svg';
import flame from '@/assets/icons/Flame_icon.svg';
import wheel from '@/assets/icons/Wheel_Angle_icon.svg';
import prot from '@/assets/icons/Shield_protect.svg';
import LatestNews from "@/components/LatestNews/LatestNews";
import Mailing from "@/components/Mailing/Mailing";
import Communicate from "@/components/Communicate/Communicate";
import Feedback from "@/components/Feedback/Feedback";
import TopBanks from "@/components/TopBanks/TopBanks";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";


type depositsT = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: string
    charcs: string[]
    btn?: string
}
type offersT = {
    img: string
    name: string
    subtitle: string
    time: number
    year_money: number
}
type catalogT = {
    img: string
    name: string
}
type banksT = {
    title: string
    sub: string
    stavka: number
    time: number | string
    money: string
    osob?: string
}
type ItemT = {
    title: string
    text: string
}

const deposits: depositsT[] = [
    {
        name: 'Локо-Банк',
        sub: 'Добро Пожаловать. Локо',
        stavka: '8,8 - 36',
        time: 'до 5 лет',
        money: 'до 5 млн.',
        img: loco,
        charcs: ['Партнер раздела', 'Без залога', 'На любые цели'],
        btn: 'Онлайн заявка'
    },
    {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: '7 - 31,6',
        time: 'до 25 лет',
        money: 'до 30 млн',
        img: sber,
        charcs: ['На любые цели'],
        btn: 'Онлайн заявка'
    },
    {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: '11,9 — 27,9',
        time: 'до 7 лет',
        money: 'до 20 млн',
        img: sber,
        charcs: ['Без залога', 'На любые цели'],
        btn: 'Онлайн заявка'
    },
    {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: '6.8',
        time: '30 — 1460',
        money: '3 000 — 1 млн',
        img: sber,
        charcs: [''],
        btn: 'Онлайн заявка'
    },
]
const data: string[] = [ekspo, spm, psb, sber, tinkoff, norvik, norvik]
const offersMoth: offersT[] = [
    {img: tinkoff_i, subtitle: '-5% при оформлении на ...', name: 'Тинькофф Банк', time: 370, year_money: 3.7},
    {img: alfa, subtitle: 'Наличными', name: 'Альфа-банк', time: 370, year_money: 4},
    {img: otkr, subtitle: 'Наличными', name: 'Банк «Открытие» ', time: 370, year_money: 4},
    {img: vtb, subtitle: 'Наличными', name: 'ВТБ', time: 370, year_money: 4},
]
const catalogData: catalogT[] = [
    {img: money_i, name: 'Наличными'},
    {img: sprav, name: 'Без справок'},
    {img: home_i, name: 'На любые цели'},
    {img: swit, name: 'Рефинансирование'},
    {img: smar, name: 'Онлайн-заявка на кредит'},
    {img: flame, name: 'Экспресс-кредиты'},
    {img: wheel, name: 'Кредит на автомобиль'},
    {img: prot, name: 'Кредит под залог'},
]
const banks: banksT[] = [
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    }, {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },
    {
        title: 'Локо-Банк',
        stavka: 0,
        sub: 'Добро Пожаловать. Локо',
        money: '300 000 — 1 300 000',
        time: '1 - 7'
    },

]
const questData: ItemT[] = [
    {title: 'Что нужно знать перед тем, как взять потребительский кредит?', text: ''},
    {title: 'Эксперты направления Кредиты', text: ''},
    {title: 'Задать вопрос о кредитах', text: ''},
]

const ConsumerCreditsPage = () => {
    return (
        <PageWrapper>
            <IntroConsumer/>
            <Bonus/>
            <SliderBanksCons data={data}/>
            <OffersBanks sub={'предложения'} title={'223'} deposits={deposits} options={['По популярности']}/>
            <OfferMoth offers={offersMoth}/>
            <CatalogItems title={'Каталог кредитов'} items={catalogData}/>
            <LatestNews/>
            <Mailing/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о кредитах'}/>
            <TopBanks title={'Потребительские кредиты в Москве'} sub={' - ТОП 10 банков в 2023 году'} banks={banks}
                      fz={36}/>
            <FrequentQuestions title={'Важные вопросы'} items={questData}/>
        </PageWrapper>
    );
};

export default ConsumerCreditsPage;