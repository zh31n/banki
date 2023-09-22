import React from 'react'
import s from './StockItem.module.scss'
import { ItemsActionT } from '@/screens/HomePage/components/Stock/Stock'

interface Props extends ItemsActionT {
  handleClick?: () => void
}

const StockItem = ({ title, subtitle, handleClick }: Props) => {
  return (
    <div className={s.stock_item} onClick={() => handleClick()}>
      <div className={s.title}>{title}</div>
      <div className={s.sup}>{subtitle}</div>
    </div>
  )
}

export default StockItem
