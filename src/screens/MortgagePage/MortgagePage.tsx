import React from 'react';
import s from './MortgagePage.module.scss';
import PageWrapper from "@/containers/PageWrapper";
import IntroMortgage from "@/screens/MortgagePage/components/IntroMortgage/IntroMortgage";
import Bonus from "@/components/Bonus/Bonus";
import OffersBanks from "@/components/Offers/OffersBanks/OffersBanks";
import Mailing from "@/components/Mailing/Mailing";
import Compilations from "@/screens/CreditsIpotekaPage/components/Сompilations/Compilations";
import loco from "@/assets/icons/banki_icon/loco.svg";
import {StaticImageData} from "next/image";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import Communicate from "@/components/Communicate/Communicate";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

type ChoiseT = {
    active: boolean
    name: string
};
type OfferT = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: StaticImageData
    charcs: string[]
    btn?: string | undefined
    count?: string | undefined
};
type questT = {
    title: string
    text: string
}
type Props = {
    data: {
        choises: ChoiseT[],
        offersBanks: OfferT[],
        questData: questT[]
    }
};

const MortgagePage = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroMortgage items={data.choises}/>
            <Bonus title={'Мастер подбора ипотеки'}/>
            <OffersBanks deposits={data.offersBanks} title={'943 кредитов '} sub={'подобрано'}
                         options={['По популярности']}
            />
            <Mailing/>
            <Compilations/>
            <OffersMonth/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'об ипотеке'}/>
            <FrequentQuestions title={''} items={data.questData}/>
        </PageWrapper>
    );
};

export default MortgagePage;