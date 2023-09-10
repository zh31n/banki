import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
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
import OffersBanks from "@/components/Offers/OffersBanks/OffersBanks";
import tinkoff_i from '@/assets/icons/banki_icon/tinkoff.svg';
import alfa from '@/assets/icons/banki_icon/alfa.svg';
import otkr from '@/assets/icons/banki_icon/otkritie.svg';
import vtb from '@/assets/icons/banki_icon/vtb.svg';
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
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
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import TopBanks from "@/components/TopBanks/TopBanks";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import {StaticImageData} from "next/image";


type depositsT = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: StaticImageData
    charcs: string[]
    btn?: string
}
type offersT = {
    img: StaticImageData
    name: string
    subtitle: string
    time: number
    year_money: number
}
type catalogT = {
    img: StaticImageData
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
type Props = {
    data: {
        deposits: depositsT[]
        sliderBanks: StaticImageData[]
        offersMoth: offersT[]
        catalogData: catalogT[]
        banks: banksT[]
        questData: ItemT[]
    }

}

const ConsumerCreditsPage = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroConsumer/>
            <Bonus/>
            <SliderBanksCons data={data.sliderBanks}/>
            <OffersBanks isSelect={true} sub={' предложения'} title={'223'} deposits={data.deposits} options={['По популярности']}/>
            <OfferMoth offers={data.offersMoth}/>
            <CatalogItems title={'Каталог кредитов'} items={data.catalogData}/>
            <LatestNews/>
            <Mailing/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о кредитах'}/>
            <TopBanks title={'Потребительские кредиты в Москве'} sub={' - ТОП 10 банков в 2023 году'} banks={data.banks}
                      fz={36}/>
            <FrequentQuestions title={'Важные вопросы'} items={data.questData}/>
        </PageWrapper>
    );
};

export default ConsumerCreditsPage;