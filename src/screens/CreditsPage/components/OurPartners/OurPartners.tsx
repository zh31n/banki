'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from './OurPartners.module.scss'
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import BankImgItemSlide from '@/components/Banki/BankiImg/BankImgItemSlide/BankImgItemSlide'
import data from '@/core/data'
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg'

type Props = {
  items: StaticImageData[]
}
const OurPartners = ({ items }: Props) => {
  return (
    <div className={s.wrapp}>
      <div className={s.title}>
        Наши партнеры больше <mark>50 банков</mark>
      </div>
      <SliderBanksCons data={items} />
    </div>
  )
}

export default OurPartners
