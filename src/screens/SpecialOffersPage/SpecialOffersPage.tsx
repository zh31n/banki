import React from 'react';
import s from './SpecialOffersPage.module.scss';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import SpecialOfferItem from "@/components/Offers/SpecialOfferItem/SpecialOfferItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import PageWrapper from "@/containers/PageWrapper";
import IntroSpecialOffer from "@/screens/SpecialOffersPage/components/IntroSpecialOffer/IntroSpecialOffer";
import {StaticImageData} from "next/image";
import SpecialOffersMap from "@/components/Offers/SpecialOffersMap/SpecialOffersMap";

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
    img: StaticImageData
    bankImg: StaticImageData
    bonus?: string
    bet?: number
    days?: string
    title_1?: string
    count1?: string
    title_2?: string
    count2?: string
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

    return (
        <PageWrapper>
            <IntroSpecialOffer choises={data.choises}/>
            <div className={s.page_i}>
                <div className={s.select_cont}>{selectItems}</div>
                <div className={s.offers_item_cont}>
                    <SpecialOffersMap items={data.offerData}/>
                </div>
                <div className={s.btnCont}>
                    <BlueBtn text={'Показать еще'} width={235}/>
                </div>
                <FrequentQuestions title={'Частые вопросы'} items={data.questions.items}/>
            </div>
        </PageWrapper>
    );
};

export default SpecialOffersPage;