import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react'
import s from './index.module.scss'
import CustomSelect from '@/UI/CustomSelect/CustomSelect'
import lines from '@/assets/icons/banki_icon/3-line.svg'
import BlueBtn from '@/UI/BlueBtn/BlueBtn'
import { CreditInterface } from 'src/core/services/Credits'
import CreditBankItem from '@/components/credits/CreditBankItem'
import { oneOfferConsumerCreditsT } from '@/screens/ConsumerCreditsPage/ConsumerCreditsPage'
import { nanoid } from 'nanoid'

interface CreditBankListProps {
  credits: oneOfferConsumerCreditsT[]
  title: string | number
  sub: string
  options: string[]
  isSelect: boolean
}

const CreditBankList = (props: CreditBankListProps) => {
  const { credits, options, title, sub, isSelect } = props
  const [loansLength, setLoansLenth] = useState([])
  const titleScroll = useRef<HTMLUListElement>(null)
  const [isOpen, setIsOpen] = useState<(number | string)[]>([])
  const [higthDepositItem, setHigthDepositItem] = useState(0)
  const [sortValue, setSortValue] = useState('По процентной ставке')

  const loansCurtailedByBanks = useMemo(() => {
    const _loansCurtailedByBanks = credits.reduce((arr, el) => {
      const avilable = arr.find((bank) => bank[0].bank_name === el.bank_name)
      if (avilable) {
        avilable.push(el)
      } else {
        let nevArr = [el]
        arr.push(nevArr)
      }
      return arr
    }, [])

    _loansCurtailedByBanks.map((el) => {
      return el.map((elem) => {
        return (elem.length = el.length)
      })
    })

    return _loansCurtailedByBanks
  }, [credits])

  const leaderBanks = useMemo(() => {
    const _leaderBanks = loansCurtailedByBanks.reduce((arr, el) => {
      arr.push(el[0])
      return arr
    }, [])

    return _leaderBanks
  }, [loansCurtailedByBanks])

  useEffect(() => {
    if (!leaderBanks) return
    setLoansLenth(leaderBanks.slice(0, 4))
  }, [])

  const handleClick = () => {
    titleScroll.current.scrollIntoView({
      behavior: 'smooth',
    })
    setLoansLenth((prevState) =>
      prevState.length === 4 ? leaderBanks : leaderBanks.slice(0, 4)
    )
  }

  const handleOpenChildren = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
      item: oneOfferConsumerCreditsT
    ) => {
      setHigthDepositItem(
        e.currentTarget.parentElement.parentElement.getBoundingClientRect()
          .height
      )
      const presence = isOpen.find((el) => el === item.bank_name)
      if (!presence) {
        setIsOpen((currentVal) => [...currentVal, item.bank_name])
      } else {
        setIsOpen((currentVal) =>
          currentVal.filter((el) => el !== item.bank_name)
        )
      }
    },
    [isOpen]
  )

  const presenceClassName = (item: oneOfferConsumerCreditsT) => {
    const presence = isOpen.find((el) => el === item.bank_name)

    return presence ? true : false
  }

  const sortOffers = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    if (sortValue === e.currentTarget.value) return
    setSortValue(e.currentTarget.value)
  }

  function sortOffer(
    criterion: 'max_procent' | 'max_amount' | 'timeframe_max'
  ) {
    loansCurtailedByBanks.map((bankOf: oneOfferConsumerCreditsT[]) => {
      return bankOf.sort((x, y) => {
        return y[criterion] - x[criterion]
      })
    })

    leaderBanks.sort((x, y) => {
      return y[criterion] - x[criterion]
    })

    setLoansLenth(leaderBanks.slice(0, 4))
  }

  useEffect(() => {
    if (sortValue === '') return
    switch (sortValue) {
      case 'По процентной ставке':
        sortOffer('max_procent')
        break
      case 'По максимальной сумме':
        sortOffer('max_amount')
        break
      case 'По максимальному сроку':
        sortOffer('timeframe_max')
        break
    }
  }, [sortValue])

  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{title}</mark>
          {sub}
        </span>
        {isSelect && (
          <CustomSelect
            img={lines}
            options={options}
            handleSort={(e) => sortOffers(e)}
          />
        )}
      </div>
      <ul className={s.deposit_offers} ref={titleScroll}>
        {loansLength.map((item) => {
          const arrChildren = loansCurtailedByBanks.find(
            (el: oneOfferConsumerCreditsT[]) =>
              el[0].bank_name === item.bank_name
          )

          return (
            <li key={nanoid()}>
              <CreditBankItem
                item={item}
                arrChildren={arrChildren.length > 1 && arrChildren.slice(1)}
                openChildren={(e) => handleOpenChildren(e, item)}
              />
              <ul
                className={s.deposit_offers_children}
                style={{
                  height: presenceClassName(item)
                    ? `${
                        (arrChildren.length - 1) * higthDepositItem +
                        (arrChildren.length - 1) * 10
                      }px`
                    : '0',
                }}
              >
                {arrChildren.slice(1).map((child: oneOfferConsumerCreditsT) => (
                  <li
                    key={nanoid()}
                    style={{ marginTop: '2.5px', marginBottom: '2.5px' }}
                  >
                    <CreditBankItem child item={child} />
                  </li>
                ))}
              </ul>
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

export default CreditBankList
