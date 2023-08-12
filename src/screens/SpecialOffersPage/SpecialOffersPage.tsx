import React from 'react';
import s from './SpecialOffersPage.module.scss';
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";
import ruble from '@/assets/icons/banki_icon/Ruble.svg';
import linesI from '@/assets/icons/banki_icon/3-line.svg';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import img_1 from '@/assets/icons/offer_img1.png';
import img_2 from '@/assets/icons/offer_img2.png';
import img_3 from '@/assets/icons/offer_img3.png';
import img_4 from '@/assets/icons/offer_img4.png';
import dom from '@/assets/icons/banki_icon/dom.svg';
import europe from '@/assets/icons/banki_icon/europe.svg';
import norvik from '@/assets/icons/banki_icon/norvik.svg';
import SpecialOfferItem from "@/components/Offers/SpecialOfferItem/SpecialOfferItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import PageWrapper from "@/containers/PageWrapper";
import IntroSpecialOffer from "@/screens/SpecialOffersPage/components/IntroSpecialOffer/IntroSpecialOffer";

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
type questItemT = {
    title: string
    text: string
}
type questT = {
    title: string
    items: questItemT[]
}
type Props = {
    data: {
        questions: questT
        choises: choisesT[]
        selectData: selectDataT[]
        offerData: offerDataT[]
    }
}

const SpecialOffersPage = ({data}: Props) => {
    const selectItems = data.selectData.map((elm, index) => <CustomSelect img={elm.img} options={elm.options}
                                                                          key={index}/>)
    const offerItems = data.offerData.map((el, index) => <SpecialOfferItem name={el.name} img={el.img}
                                                                           bankImg={el.bankImg}
                                                                           bonus={el.bonus} bet={el.bet} days={el.days}
                                                                           key={index}/>)

    return (
        <PageWrapper>
            <IntroSpecialOffer choises={data.choises}/>
            <div className={s.page_i}>
                <div className={s.select_cont}>{selectItems}</div>
                <div className={s.offers_item_cont}>{offerItems}</div>
                <div className={s.btnCont}>
                    <BlueBtn text={'Показать еще'} width={235}/>
                </div>
                <FrequentQuestions title={'Частые вопросы'} items={data.questions.items}/>
            </div>
        </PageWrapper>
    );
};

export default SpecialOffersPage;