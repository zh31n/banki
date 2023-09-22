'use client'

import React, { useState } from 'react'
import s from './Stock.module.scss'
import BlueBtn from '@/UI/BlueBtn/BlueBtn'
import StockItem from '@/components/StockItem/StockItem'

export type ItemsActionT = {
  id: number
  subtitle: string
  text: string
  title: string
}

type Props = {
  data: { stocks: ItemsActionT[]; stock: ItemsActionT }
}

const Stock = ({ data }: Props) => {
  const [activeSlide, setActiveSlide] = useState<ItemsActionT>(data.stock)
  const stockItems = data.stocks.map((el, index) => (
    <StockItem
      key={index}
      title={el.title}
      sup={el.subtitle}
      handleClick={() => setActiveSlide(el)}
    />
  ))

  return (
    <div className={s.stock}>
      <div className={s.info}>
        <div className={s.title}>
          {activeSlide.title}
          <br /> {activeSlide.id}
        </div>
        <div className={s.sup}>{activeSlide.subtitle}</div>
        <div className={s.btns}>
          <BlueBtn text={'Кнопка 1'} width={240} />
          <div className={s.btn}>Кнопка 2</div>
        </div>
      </div>
      <div className={s.stock_items}>{stockItems}</div>
    </div>
  )
}

export default Stock
