import React from 'react';
import s from './SpecialOffersPage.module.scss';
import ChoiseItem from "@/components/ChoiseItem/ChoiseItem";
import ruble from '@/assets/icons/banki_icon/Ruble.svg';
import linesI from '@/assets/icons/banki_icon/3-line.svg';
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import img_1 from '@/assets/icons/offer_img1.png';
import img_2 from '@/assets/icons/offer_img2.png';
import img_3 from '@/assets/icons/offer_img3.png';
import img_4 from '@/assets/icons/offer_img4.png';
import dom from '@/assets/icons/banki_icon/dom.svg';
import europe from '@/assets/icons/banki_icon/europe.svg';
import norvik from '@/assets/icons/banki_icon/norvik.svg';
import SpecialOfferItem from "@/components/SpecialOfferItem/SpecialOfferItem";
import BlueBtn from "@/components/BlueBtn/BlueBtn";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

type choisesT = {
    name: string
    active: boolean
}
type selectDataT = {
    img: string
    options: string[]
}
type offerDataT = {
    name: string
    img: string
    bankImg: string
    bonus: string
    bet: number
    days: string
}
type questT = {
    title: string
    items: object[]
}


const questions: questT = {
    title: 'Частые вопросы',
    items: [
        {title: 'Что такое специальные предложения?', text: ''},
        {title: 'Какие уникальные условия могут быть доступны по специальным предложениям?', text: ''},
        {title: 'Как получить промокод?', text: ''},
        {title: 'Как воспользоваться промокодом?', text: ''},
        {title: 'Какой срок действия промокода?', text: ''},
        {title: 'Как рассчитать доход по специальным  по вкладу?', text: ''},
        {title: 'Что такое «Акции банков»?', text: ''},
        {title: 'Как уточнить условия по специальным предложениям и акциям банков?', text: ''},
        {title: 'Вклады по специальным предложениям застрахованы?', text: ''},
    ]
}
const choises: choisesT[] = [
    {name: 'Все', active: true},
    {name: 'Вклады', active: false},
    {name: 'Потребительские кредиты', active: false},
    {name: 'Ипотека', active: false},
    {name: 'Кредитные карты', active: false},
    {name: 'Дебетовые карты', active: false},
    {name: 'Инвестиции', active: false},
    {name: 'Страхование', active: false},
]
const selectData: selectDataT[] = [
    {img: ruble, options: ['Любая валюта']},
    {img: linesI, options: ['По популярности']}
]
const offerData: offerDataT[] = [
    {name: 'Вклад Мой Дом', img: img_1, bankImg: dom, bonus: 'Бонус 500 ₽ за вклад', bet: 8.6, days: '550 дней'},
    {name: 'Вклад «Оптимальный»', img: img_2, bankImg: dom, bonus: 'Бонус 500 ₽ за вклад', bet: 8, days: '181 день'},
    {name: 'Срочный в дирхамах ОАЭ', img: img_3, bankImg: europe, bonus: '', bet: 3, days: '91 - 368 дней'},
    {name: 'Вклад «Оптимальный»', img: img_4, bankImg: norvik, bonus: '', bet: 9.6, days: 'до 18 месяцев'},
    {name: 'Вклад Мой Дом', img: img_1, bankImg: dom, bonus: 'Бонус 500 ₽ за вклад', bet: 8.6, days: '550 дней'},
    {name: 'Вклад «Оптимальный»', img: img_2, bankImg: dom, bonus: 'Бонус 500 ₽ за вклад', bet: 8, days: '181 день'},
    {name: 'Срочный в дирхамах ОАЭ', img: img_3, bankImg: europe, bonus: '', bet: 3, days: '91 - 368 дней'},
    {name: 'Вклад «Оптимальный»', img: img_4, bankImg: norvik, bonus: '', bet: 9.6, days: 'до 18 месяцев'},
    {name: 'Вклад Мой Дом', img: img_1, bankImg: dom, bonus: 'Бонус 500 ₽ за вклад', bet: 8.6, days: '550 дней'},
    {name: 'Вклад «Оптимальный»', img: img_2, bankImg: dom, bonus: 'Бонус 500 ₽ за вклад', bet: 8, days: '181 день'},
    {name: 'Срочный в дирхамах ОАЭ', img: img_3, bankImg: europe, bonus: '', bet: 3, days: '91 - 368 дней'},
    {name: 'Вклад «Оптимальный»', img: img_4, bankImg: norvik, bonus: '', bet: 9.6, days: 'до 18 месяцев'}
]

const choiseItems = choises.map((el, index) => <ChoiseItem key={index} name={el.name} active={el.active}/>)
const selectItems = selectData.map((elm, index) => <CustomSelect img={elm.img} options={elm.options} key={index}/>)
const offerItems = offerData.map((el, index) => <SpecialOfferItem name={el.name} img={el.img} bankImg={el.bankImg}
                                                                  bonus={el.bonus} bet={el.bet} days={el.days}
                                                                  key={index}/>)

const SpecialOffersPage = () => {
    return (
        <div className={s.page}>
            <div className="container">
                <div className={s.page_i}>
                    <div className={s.page_info}>
                        <div className={s.page_info_i}>
                            <div className={s.pageName}>
                                Главная / Вклады / <mark>Специальные предложения</mark>
                            </div>
                            <div className={s.title}>
                                Специальные <mark>предложения</mark>
                            </div>
                            <div className={s.choiseItems}>{choiseItems}</div>
                        </div>
                    </div>
                    <div className={s.select_cont}>{selectItems}</div>
                    <div className={s.offers_item_cont}>{offerItems}</div>
                    <div className={s.btnCont}>
                        <BlueBtn text={'Показать еще'} width={235}/>
                    </div>
                    <FrequentQuestions title={'Частые вопросы'} items={questions.items}/>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffersPage;