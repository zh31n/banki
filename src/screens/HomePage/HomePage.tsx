'use client'

'use client'

import React, { useEffect, useState } from 'react'
import Search from '@/UI/Search/Search'
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth'
import LatestNews from '@/components/LatestNews/LatestNews'
import Feedback from '@/components/FeedBacks/Feedback/Feedback'
import PageWrapper from '@/containers/PageWrapper'
import Stock, { ItemsActionT } from '@/screens/HomePage/components/Stock/Stock'
import Slide from '@/screens/HomePage/components/Slide/Slide'
import Banks from '@/screens/HomePage/components/Banks/Banks'
import { useTypedSelector } from '@/core/store'
// import async from './../../app/cards/select-steps/final/page'
import Calculate from './components/Calculate/Calculate'
import axios from 'axios'

type SearchItem = {
  text: string
  link: string
}

type Props = {
  data: any
}

const HomePage = ({ data }: Props) => {
  const [stocks, setStocks] = useState<{ cards: ItemsActionT[] }>()
  const [promo, setPromo] = useState<{ card: ItemsActionT }>()

  const { serviceItems } = useTypedSelector((state) => state.home)
  const [searchVal, setSearchVal] = useState<string>('')
  const filterArr = (items: SearchItem[]) =>
    items.filter((i) => i.text.toLowerCase().includes(searchVal.toLowerCase()))

  useEffect(() => {
    let isMounted = true
    const allPromotions = axios.get(
      'https://vsebanki.kg/api/promotions?page=1&limit=4&sort=id&sort_type=1'
    )
    const onePromotions = axios.get('https://vsebanki.kg/api/promotion?promo=1')
    const getPromotions = async () => {
      const [all, one]: any = await Promise.all([
        allPromotions,
        onePromotions,
      ]).then((val) => {
        return [val[0].data, val[1].data]
      })
      if (isMounted) {
        setStocks(all)
        setPromo(one)
      }
    }
    getPromotions()
    return () => {
      isMounted = false
    }
  }, [])
  return (
    <PageWrapper>
      {stocks && promo && (
        <Stock data={{ stocks: stocks.cards, stock: promo.card }} />
      )}
      <Slide data={data.iconsSlide} />
      <Search
        setValue={setSearchVal}
        value={searchVal}
        filterArr={filterArr}
        itemsSearch={serviceItems}
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
