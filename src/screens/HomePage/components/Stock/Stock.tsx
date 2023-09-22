import React, { useCallback, useRef } from 'react'
import s from './Stock.module.scss'
import BlueBtn from '@/UI/BlueBtn/BlueBtn'
import StockItem from '@/components/StockItem/StockItem'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

export type ItemsActionT = {
  id: number
  subtitle: string
  text: string
  title: string
}

interface Props {
  data: any
}

const Stock = ({ data }: Props) => {
  const sliderRef = useRef(null)
  const handle = useCallback((index) => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideTo(index)
  }, [])

  const stockItems = data.map((el, index) => (
    <StockItem
      onClick={() => {
        handle(index)
      }}
      key={index}
      title={el.title}
      sup={el.sup}
    />
  ))
  const slides = data.map((el, index) => (
    <SwiperSlide>
      <div className={s.info}>
        <div className={s.title}>{el.title}</div>
        <div className={s.sup}>{el.sup}</div>
        <div className={s.btns}>
          <BlueBtn text={'Кнопка 1'} width={240} />
          <div className={s.btn}>Кнопка 2</div>
        </div>
      </div>
    </SwiperSlide>
  ))

  return (
    <div>
      <div className={s.stock}>
        <Swiper ref={sliderRef} autoplay={true}>
          {slides}
          <div className={s.stock_items}>{stockItems}</div>
        </Swiper>
      </div>

      <div className={s.stock_items}>{stockItems}</div>
    </div>
  )
}

export default Stock
