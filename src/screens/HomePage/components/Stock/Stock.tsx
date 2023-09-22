import React, { useCallback, useRef } from 'react';
import s from "./Stock.module.scss";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import StockItem from "@/components/StockItem/StockItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';

type ItemsActionT = {
    title: string;
    sup: string;
};
type Props = {
    data: ItemsActionT[]
}

const Stock = ({ data }: Props) => {
    const sliderRef = useRef(null);
    const handle = useCallback((index) => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideTo(index);
    }, []);

    const stockItems = data.map((el, index) => (
        <StockItem onClick={() => { handle(index) }} key={index} title={el.title} sup={el.sup} />
    ));

    return (
        <div className={s.stock}>
            <Swiper ref={sliderRef}/*modules={[EffectFlip]} effect="flip"*/ >
                {data.map((el, index) => (
                    <SwiperSlide>
                        <div className={s.info}>
                            <div className={s.title}>
                                {el.title}
                            </div>
                            <div className={s.sup}>{el.sup}</div>
                            <div className={s.btns}>
                                <BlueBtn text={"Кнопка 1"} width={240} />
                                <div className={s.btn}>Кнопка 2</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className={s.stock_items}>{stockItems}</div>
            </Swiper>
        </div>
    );
};

export default Stock;