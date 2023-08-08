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

type ItemsActionT = {
    title: string
    sup: string
}

type iconsSlideT = {
    img: string
    name: string
    w: number
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
        </main>
    );
};

export default HomePage;