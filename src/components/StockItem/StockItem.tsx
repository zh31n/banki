import React from 'react'
import s from './StockItem.module.scss'

type Props = {
  title: string
  sup: string
  handleClick: () => void
}

const StockItem = ({ title, sup, handleClick }: Props) => {
  return (
    <div className={s.stock_item} onClick={() => handleClick()}>
      <div className={s.title}>{title}</div>
      <div className={s.sup}>{sup}</div>
    </div>
  )
}

export default StockItem
