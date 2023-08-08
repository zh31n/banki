import React from 'react';
import s from './HomePage.module.scss';
import BlueBtn from "@/Components/BlueBtn/BlueBtn";
import StockItem from "@/Components/StockItem/StockItem";
import osago from '@/assets/icons/osago.svg';
import credit from '@/assets/icons/credit.svg';
import carta from '@/assets/icons/carta.svg';
import vklad from '@/assets/icons/vklad.svg';
import zaymi from '@/assets/icons/zaymi.svg';
import invest from '@/assets/icons/invest.svg';
import ipoteka from '@/assets/icons/ipoteka.svg';
import SlideItem from "@/Components/SlideItem/SlideItem";
import arr from '@/assets/icons/white_arr.svg'
import Image from "next/image";
import Search from "@/Components/Search/Search";
import sbi from '@/assets/icons/banki_icon/sbi.svg';
import absolut from '@/assets/icons/banki_icon/absolut.svg';
import agrogress from '@/assets/icons/banki_icon/agrogress.svg';
import bars from '@/assets/icons/banki_icon/bars.svg';
import BankiItem from "@/Components/BankiItem/BankiItem";
import searchI from '@/assets/icons/search.svg';

type ItemsActionT = {
    title: string
    sup: string
}

type iconsSlideT = {
    img: string
    name: string
    w: number
}

type bankiT = {
    img: string,
    name: string
    rating: number
}

const iconsSlide: iconsSlideT[] = [
    {name: 'ОСАГО', img: osago, w: 0},
    {name: 'Подбор кредита', img: credit, w: 64},
    {name: 'Подбор карты', img: carta, w: 64},
    {name: 'Вклады', img: vklad, w: 0},
    {name: 'Займы', img: zaymi, w: 0},
    {name: 'Инвестиции', img: invest, w: 0},
    {name: 'Ипотека', img: ipoteka, w: 0},
];
const slideItems = iconsSlide.map((el, index) => <SlideItem width={el.w} key={index} img={el.img} name={el.name}/>)
const data: ItemsActionT[] = [
    {title: 'Заголовок для акции для клиентов', sup: 'Подзаголовок для будущей акции'},
    {title: 'Заголовок для акции для клиентов', sup: 'Подзаголовок для будущей акции'},
    {title: 'Заголовок для акции для клиентов', sup: 'Подзаголовок для будущей акции'},
    {title: 'Заголовок для акции для клиентов', sup: 'Подзаголовок для будущей акции'},
]
const dataItems = data.map((el, index) => <StockItem key={index} title={el.title} sup={el.sup}/>);
const banki: bankiT[] = [
    {img: sbi, name: 'SBI Банк', rating: 4.2},
    {img: sbi, name: 'SBI Банк', rating: 4.2},
    {img: sbi, name: 'SBI Банк', rating: 4.2},
    {img: absolut, name: 'Абсолют Банк', rating: 4.2},
    {img: absolut, name: 'Абсолют Банк', rating: 4.2},
    {img: absolut, name: 'Абсолют Банк', rating: 4.2},
    {img: agrogress, name: 'Агророс Банк', rating: 4.2},
    {img: agrogress, name: 'Агророс Банк', rating: 4.2},
    {img: agrogress, name: 'Агророс Банк', rating: 4.2},
    {img: bars, name: 'Ак Барс Банк', rating: 4.2},
    {img: bars, name: 'Ак Барс Банк', rating: 4.2},
    {img: bars, name: 'Ак Барс Банк', rating: 4.2},
    {img: bars, name: 'Ак Барс Банк', rating: 4.2},
    {img: bars, name: 'Ак Барс Банк', rating: 4.2},
    {img: bars, name: 'Ак Барс Банк', rating: 4.2},
]
const bankiMap = banki.map((el, index) => <BankiItem key={index} img={el.img} name={el.name} rating={el.rating}/>)


const HomePage = () => {

    return (
        <main style={{marginTop: '20px'}} className='container'>
            <div className={s.stock}>
                <div className={s.info}>
                    <div className={s.title}>Заголовок для акции<br/> для клиентов</div>
                    <div className={s.sup}>Подзаголовок для будущей акции</div>
                    <div className={s.btns}>
                        <BlueBtn text={'Кнопка 1'} width={240}/>
                        <div className={s.btn}>Кнопка 2</div>
                    </div>
                </div>
                <div className={s.stock_items}>{dataItems}</div>
            </div>
            <div className={s.slide}>
                {slideItems}
                <div className={s.arr}>
                    <Image src={arr} alt={'arr'}/>
                </div>
            </div>
            <Search placeholder={'Найти необходимую услугу...'}/>
            <div className={s.banks}>
                <div className={s.title}>Все банки <span>в России</span></div>
                <div className={s.bank_map_cont}>
                    <div className={s.picture}/>
                    <div className={s.bank_map}>
                        <div className={s.banK_mWrap}>
                            {bankiMap}
                        </div>
                        <div className={s.nav_search}>
                            <BlueBtn text={'Весь список банков'} width={273}/>
                            <div className={s.search}>
                                <Image height={32} width={32} src={searchI} alt={'icon'} />
                                <input type="text" placeholder={'Введите название банка...'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;