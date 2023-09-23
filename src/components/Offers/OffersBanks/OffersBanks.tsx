'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import s from './OffersBanks.module.scss'
import CustomSelect from '@/UI/CustomSelect/CustomSelect'
import lines from '@/assets/icons/banki_icon/3-line.svg'
import BlueBtn from '@/UI/BlueBtn/BlueBtn'
import DepositOfferItem from '@/components/Deposit/DepositOfferItem/DepositOfferItem'
import { DepositCardInterface } from '@/core/services/Deposits'
import { nanoid } from 'nanoid'

interface OfferBanksProps {
  deposits: DepositCardInterface[]
  title: string
  sub: string
  options: string[]
  isSelect: boolean
}

const OffersBanks = (props: OfferBanksProps) => {
  const { deposits, options, title, sub, isSelect } = props
  const titleScroll = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState('')
  const [depositsLength, setDepositsLenth] = useState([])

  const depositsAreRolledUpAcrossBanks = useMemo(() => {
    const _depositsAreRolledUpAcrossBanks = deposits.reduce((arr, el) => {
      const avilable = arr.find((bank) => bank[0].bank_id === el.bank_id)
      if (avilable) {
        avilable.push(el)
      } else {
        let nevArr = [el]
        arr.push(nevArr)
      }
      return arr
    }, [])

    _depositsAreRolledUpAcrossBanks.map((el) => {
      return el.map((elem) => {
        return (elem.length = el.length)
      })
    })

    return _depositsAreRolledUpAcrossBanks
  }, [deposits])

  const leaderBanks = useMemo(() => {
    const _leaderBanks = depositsAreRolledUpAcrossBanks.reduce((arr, el) => {
      arr.push(el[0])
      return arr
    }, [])

    return _leaderBanks
  }, [depositsAreRolledUpAcrossBanks])

  useEffect(() => {
    if (!depositsAreRolledUpAcrossBanks) return
    setDepositsLenth(depositsAreRolledUpAcrossBanks[0].slice(0, 1))
  }, [])

  const handleClick = () => {
    titleScroll.current.scrollIntoView({
      behavior: 'smooth',
    })
    setDepositsLenth((prevState) =>
      prevState.length === 1
        ? leaderBanks
        : depositsAreRolledUpAcrossBanks
        ? depositsAreRolledUpAcrossBanks[0].slice(0, 1)
        : []
    )
  }

  return (
    <div className={s.deposits}>
      <div className={s.title} ref={titleScroll}>
        <span>
          <mark>{title}</mark>
          {sub}
        </span>
        {isSelect && <CustomSelect img={lines} options={options} />}
      </div>
      <ul className={s.deposit_offers}>
        {depositsLength.map((item, index) => {
          const arrChildren = depositsAreRolledUpAcrossBanks.find(
            (el) => el[0].bank_id === item.bank_id
          )
          return (
            <li key={nanoid()}>
              <DepositOfferItem
                item={item}
                arrChildren={arrChildren ? arrChildren.slice(1) : []}
                openChildren={() =>
                  setIsOpen((currentVal) =>
                    currentVal === item.bank_id ? '' : item.bank_id
                  )
                }
              />
              {isOpen === arrChildren[0].bank_id &&
                arrChildren.map((child) => (
                  <div
                    key={nanoid()}
                    style={{ marginTop: '2.5px', marginBottom: '2.5px' }}
                  >
                    <DepositOfferItem child item={child} />
                  </div>
                ))}
            </li>
          )
        })}
      </ul>
      <div className={s.btn_cont}>
        <BlueBtn
          text={'Смотреть все'}
          width={235}
          onClick={() => handleClick()}
        />
      </div>
    </div>
  )
}

export default OffersBanks
