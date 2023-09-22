'use client'

import React, { useState } from 'react'
import Search from '@/UI/Search/Search'
import Calculate from '@/components/Calculate/Calculate'
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth'
import LatestNews from '@/components/LatestNews/LatestNews'
import Feedback from '@/components/FeedBacks/Feedback/Feedback'
import PageWrapper from '@/containers/PageWrapper'
import Stock, { ItemsActionT } from '@/screens/HomePage/components/Stock/Stock'
import Slide from '@/screens/HomePage/components/Slide/Slide'
import Banks from '@/screens/HomePage/components/Banks/Banks'
import { useTypedSelector } from '@/core/store'
import async from './../../app/cards/select-steps/final/page'

async function getStocks(): Promise<{ cards: ItemsActionT[] }> {
  const res = await fetch(
    `https://vsebanki.kg/api/promotions?page=1&limit=4&sort=id&sort_type=1`
  ).then((data) => data.json())
  return res
}

async function getStock(): Promise<{ card: ItemsActionT }> {
  const res = await fetch(`https://vsebanki.kg/api/promotion?promo=1`).then(
    (data) => data.json()
  )

  return res
}

type Props = {
  data: any
}

const HomePage = async ({ data }: Props) => {
  // @ts-ignore
  const items = useTypedSelector((state) => state.home.serviceItems)
  const [searchVal, setSearchVal] = useState<string>('')
  const stocksData = getStocks()
  const promoData = getStock()
  const [stocks, promo] = await Promise.all([stocksData, promoData])

  return (
    <PageWrapper>
      <Stock data={{ stocks: stocks.cards, stock: promo.card }} />
      <Slide data={data.iconsSlide} />
      <Search
        setValue={setSearchVal}
        value={searchVal}
        itemsSearch={items}
        placeholder={'Найти необходимую услугу...'}
      />
      <Banks data={data.banki} />
      <Calculate />
      <OfferMoth offers={data.offersMoth} choiceItems={data.choiseOffer} />
      <LatestNews />
      <Feedback chois={data.choiseFeedback} />
    </PageWrapper>
  )
}

export default HomePage
