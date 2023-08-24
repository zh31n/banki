import React from 'react';
import s from './LastRecommends.module.scss';
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import LastRecommendItem from "@/screens/InvestmentPage/components/LastRecommends/LastRecommendItem/LastRecommendItem";
import {StaticImageData} from "next/image";

type RecomItemT = {
    img: StaticImageData
    name: string
    sub: string
    btn: string
}
type Props = {
    items: RecomItemT[]
}
const LastRecommends = ({items}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <div className={s.title}>Последние рекомендации</div>
                <p>
                    Актуальные аналитические обзоры, оценки экономической ситуации в России и мире, рекомендации по
                    российским и зарубежным акциям и облигациям, валютам и сырью от ведущих брокерских компаний и
                    банков, а также последние исследования и прогнозы от экспертов (НАЗВАНИЕ СЕРВИСА).
                    <br/><br/>
                    Все, что нужно для грамотного инвестирования.
                </p>
                <BlueBtn text={'Перейти к списку акций'} width={314}/>
            </div>
            <div className={s.items}>
                {items.map((el, index) => <LastRecommendItem img={el.img}
                                                             name={el.name} sub={el.sub} btn={el.btn}
                                                             key={index}/>)
                }
            </div>
        </div>
    );
};

export default LastRecommends;