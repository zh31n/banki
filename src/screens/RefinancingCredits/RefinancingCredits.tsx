import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
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
type Props = {
    data: {
        sliderItems: string[]
        ourData: itemT[]
        questData: quesT[]
    }
}


const RefinancingCredits = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroRefinancing/>
            <SliderBanksCons data={data.sliderItems}/>
            <OurStrongs/>
            <HowItWorks title={'Как работает '} sub={'сервис'} items={data.ourData}/>
            <FrequentQuestions title={'Важные вопросы'} items={data.questData}/>
        </PageWrapper>
    );
};

export default RefinancingCredits;