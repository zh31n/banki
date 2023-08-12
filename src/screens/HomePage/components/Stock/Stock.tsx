import React from 'react';
import s from "./Stock.module.scss";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import StockItem from "@/components/StockItem/StockItem";

type ItemsActionT = {
    title: string;
    sup: string;
};
type Props = {
    data: ItemsActionT[]
}

const Stock = ({data}: Props) => {

    const stockItems = data.map((el, index) => (
        <StockItem key={index} title={el.title} sup={el.sup}/>
    ));

    return (
        <div className={s.stock}>
            <div className={s.info}>
                <div className={s.title}>
                    Заголовок для акции
                    <br/> для клиентов
                </div>
                <div className={s.sup}>Подзаголовок для будущей акции</div>
                <div className={s.btns}>
                    <BlueBtn text={"Кнопка 1"} width={240}/>
                    <div className={s.btn}>Кнопка 2</div>
                </div>
            </div>
            <div className={s.stock_items}>{stockItems}</div>
        </div>
    );
};

export default Stock;