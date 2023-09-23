'use client'
import React, {useEffect, useState} from 'react'
import PageWrapper from '@/containers/PageWrapper'
import IntroDeposits from '@/screens/DepositsPage/components/IntroDeposits/IntroDeposits'
import Bonus from '@/components/Bonus/Bonus'
import absolut from '@/assets/icons/absolute_big.svg'
import {StaticImageData} from 'next/image'
import OffersBanks from '@/components/Offers/OffersBanks/OffersBanks'
import PopularOffers from '@/screens/DepositsPage/components/PopularOffers/PopularOffers'
import OfferMonth from '@/components/Offers/OfferMoth/OfferMoth'
import Mailing from '@/components/Mailing/Mailing'
import LatestNews from '@/components/LatestNews/LatestNews'
import SpecialOffersDeposit from '@/screens/DepositsPage/components/SpecialOffersDeposit/SpecialOffersDeposit'
import Communicate from '@/components/Communicate/Communicate'
import Feedback from '@/components/FeedBacks/Feedback/Feedback'
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions'
import TopBanks from '@/components/TopBanks/TopBanks'
import {DepositCardInterface} from '@/core/services/Deposits'
import {useDispatch, useSelector} from 'react-redux'
import {depositsGetRequestedAction} from '@/core/store/deposits/actions'
import {DepositsSelector} from '@/core/store/deposits/selectors'

type offerT = {
    bank_id: number | string
    description?: string
    id: number
    max_amount?: number
    min_amount?: number
    name: string
    rate?: number
    rating?: number
    timeframe_max?: number
    timeframe_min?: number
}
type OfferItem = {
    active: boolean
    img: StaticImageData
    title: string
    sub: string
    id: number
}
type OfferMoths = {
    img: StaticImageData
    name: string
    subtitle: string
    time?: number | undefined
    year_money?: number | undefined
    title_1?: string | undefined
    title1_key?: string | undefined
    title2?: string | undefined
    title2_key?: string | undefined
}
type offerI = {
    name: string
    img: StaticImageData
    bankImg: StaticImageData
    bonus: string
    bet: number
    days: string
}
type quesT = {
    title: string
    text: string
}
type banksT = {
    title: string
    sub: string
    stavka: number
    time: number | string
    money: string
    osob?: string
}

interface DepositsPageProps {
    staticData: {
        offersBanks: offerT[]
        PopularOffers: OfferItem[]
        offersMoth: OfferMoths[]
        questData: quesT[]
        specialOffers: offerI[]
        Topbanks: banksT[]
    }
}

const DepositsPage = (props: DepositsPageProps) => {
    const {staticData} = props
    const deposits: DepositCardInterface[] = useSelector(DepositsSelector)
    const dispatch = useDispatch()
    const bonus = deposits[0]

    useEffect(() => {
        dispatch(depositsGetRequestedAction())
    }, [])

    const [currentOffer, setCurrentOffer] = useState<number>(1)

    return (
        <PageWrapper>
            <IntroDeposits/>
            {bonus && (
                <Bonus
                    title={`Вклад ${bonus.rate}% на ${Math.floor(
                        bonus.timeframe_max / 365
                    )} года`}
                    text={bonus.description}
                    img={absolut}
                />
            )}
            <OffersBanks
                isSelect={true}
                deposits={staticData.offersBanks}
                title={`${staticData.offersBanks.length} вклада`}
                sub={' подобрано'}
                options={['По популярности']}
            />
            <PopularOffers setActive={setCurrentOffer} active={currentOffer} data={staticData.PopularOffers}/>
            <OfferMonth offers={deposits}/>
            <Mailing/>
            <LatestNews/>
            <SpecialOffersDeposit deposits={deposits}/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о вкладах'}/>
            <FrequentQuestions
                title={'Частые вопросы'}
                items={staticData.questData}
            />
            <TopBanks banks={deposits}/>
        </PageWrapper>
    )
}

export default DepositsPage;
