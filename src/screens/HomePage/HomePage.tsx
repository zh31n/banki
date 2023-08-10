import React from "react";
import s from "./HomePage.module.scss";
import BlueBtn from "@/components/BlueBtn/BlueBtn";
import StockItem from "@/components/StockItem/StockItem";
import osago from "@/assets/icons/osago.svg";
import credit from "@/assets/icons/credit.svg";
import carta from "@/assets/icons/carta.svg";
import vklad from "@/assets/icons/vklad.svg";
import zaymi from "@/assets/icons/zaymi.svg";
import invest from "@/assets/icons/invest.svg";
import ipoteka from "@/assets/icons/ipoteka.svg";
import SlideItem from "@/components/SlideItem/SlideItem";
import arr from "@/assets/icons/white_arr.svg";
import Image from "next/image";
import Search from "@/components/Search/Search";
import sbi from "@/assets/icons/banki_icon/sbi.svg";
import absolut from "@/assets/icons/banki_icon/absolut.svg";
import agrogress from "@/assets/icons/banki_icon/agrogress.svg";
import bars from "@/assets/icons/banki_icon/bars.svg";
import BankiItem from "@/components/BankiItem/BankiItem";
import searchI from "@/assets/icons/search.svg";
import Calculate from "@/components/Calculate/Calculate";
import ChoiseItem from "@/components/ChoiseItem/ChoiseItem";
import arr_l from "@/assets/icons/banki_icon/Стрелка_left.svg";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import loc_bank from "@/assets/icons/banki_icon/loco.svg";
import OfferItem from "@/components/OfferItem/OfferItem";
import OfferMoth from "@/components/OfferMoth/OfferMoth";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/Feedback/Feedback";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

type ItemsActionT = {
  title: string;
  sup: string;
};
type iconsSlideT = {
  img: string;
  name: string;
  w: number;
};
type bankiT = {
  img: string;
  name: string;
  rating: number;
};
type choiseItemsT = {
  name: string;
  active: boolean;
};
type offersT = {
  name: string;
  subtitle: string;
  img: string;
  time: number;
  year_money: number;
};

const iconsSlide: iconsSlideT[] = [
  { name: "ОСАГО", img: osago, w: 0 },
  { name: "Подбор кредита", img: credit, w: 64 },
  { name: "Подбор карты", img: carta, w: 64 },
  { name: "Вклады", img: vklad, w: 0 },
  { name: "Займы", img: zaymi, w: 0 },
  { name: "Инвестиции", img: invest, w: 0 },
  { name: "Ипотека", img: ipoteka, w: 0 },
];
const data: ItemsActionT[] = [
  {
    title: "Заголовок для акции для клиентов",
    sup: "Подзаголовок для будущей акции",
  },
  {
    title: "Заголовок для акции для клиентов",
    sup: "Подзаголовок для будущей акции",
  },
  {
    title: "Заголовок для акции для клиентов",
    sup: "Подзаголовок для будущей акции",
  },
  {
    title: "Заголовок для акции для клиентов",
    sup: "Подзаголовок для будущей акции",
  },
];
const banki: bankiT[] = [
  { img: sbi, name: "SBI Банк", rating: 4.2 },
  { img: sbi, name: "SBI Банк", rating: 4.2 },
  { img: sbi, name: "SBI Банк", rating: 4.2 },
  { img: absolut, name: "Абсолют Банк", rating: 4.2 },
  { img: absolut, name: "Абсолют Банк", rating: 4.2 },
  { img: absolut, name: "Абсолют Банк", rating: 4.2 },
  { img: agrogress, name: "Агророс Банк", rating: 4.2 },
  { img: agrogress, name: "Агророс Банк", rating: 4.2 },
  { img: agrogress, name: "Агророс Банк", rating: 4.2 },
  { img: bars, name: "Ак Барс Банк", rating: 4.2 },
  { img: bars, name: "Ак Барс Банк", rating: 4.2 },
  { img: bars, name: "Ак Барс Банк", rating: 4.2 },
  { img: bars, name: "Ак Барс Банк", rating: 4.2 },
  { img: bars, name: "Ак Барс Банк", rating: 4.2 },
  { img: bars, name: "Ак Барс Банк", rating: 4.2 },
];
const choiseItems: choiseItemsT[] = [
  { name: "Вклады", active: true },
  { name: "Накопительные счета", active: false },
  { name: "Кредиты", active: false },
  { name: "Дебетовые карты", active: false },
  { name: "Ипотека", active: false },
  { name: "Микрозаймы", active: false },
  { name: "РКО", active: false },
  { name: "Инвестиции", active: false },
  { name: "Ипотека от ПИК", active: false },
];
const offers: offersT[] = [
  {
    name: "Локо-Банк",
    subtitle: "Добро Пожаловать. Локо",
    img: loc_bank,
    time: 370,
    year_money: 10.1,
  },
  {
    name: "Локо-Банк",
    subtitle: "Добро Пожаловать. Локо",
    img: loc_bank,
    time: 370,
    year_money: 10.1,
  },
  {
    name: "Локо-Банк",
    subtitle: "Добро Пожаловать. Локо",
    img: loc_bank,
    time: 370,
    year_money: 10.1,
  },
  {
    name: "Локо-Банк",
    subtitle: "Добро Пожаловать. Локо",
    img: loc_bank,
    time: 370,
    year_money: 10.1,
  },
];

const slideItems = iconsSlide.map((el, index) => (
  <SlideItem width={el.w} key={index} img={el.img} name={el.name} />
));
const dataItems = data.map((el, index) => (
  <StockItem key={index} title={el.title} sup={el.sup} />
));
const bankiMap = banki.map((el, index) => (
  <BankiItem key={index} img={el.img} name={el.name} rating={el.rating} />
));
const choiseItemsMap = choiseItems.map((el, index) => (
  <ChoiseItem name={el.name} active={el.active} key={index} />
));
const offerItems = offers.map((el, index) => (
  <OfferItem
    key={index}
    img={el.img}
    name={el.name}
    subtitle={el.subtitle}
    time={el.time}
    year_money={el.year_money}
  />
));

const HomePage = () => {
  return (
    <PageWrapper>
      <div className={s.stock}>
        <div className={s.info}>
          <div className={s.title}>
            Заголовок для акции
            <br /> для клиентов
          </div>
          <div className={s.sup}>Подзаголовок для будущей акции</div>
          <div className={s.btns}>
            <BlueBtn text={"Кнопка 1"} width={240} />
            <div className={s.btn}>Кнопка 2</div>
          </div>
        </div>
        <div className={s.stock_items}>{dataItems}</div>
      </div>
      <div className={s.slide}>
        {slideItems}
        <div className={s.arr}>
          <Image src={arr} alt={"arr"} />
        </div>
      </div>
      <Search placeholder={"Найти необходимую услугу..."} />
      <div className={s.banks}>
        <div className={s.title}>
          Все банки <span>в России</span>
        </div>
        <div className={s.bank_map_cont}>
          <div className={s.picture} />
          <div className={s.bank_map}>
            <div className={s.banK_mWrap}>{bankiMap}</div>
            <div className={s.nav_search}>
              <BlueBtn text={"Весь список банков"} width={273} />
              <div className={s.search}>
                <Image height={32} width={32} src={searchI} alt={"icon"} />
                <input type="text" placeholder={"Введите название банка..."} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Calculate />
      <OfferMoth offers={offerss} choiseItems={choiseItemss} />
      <LatestNews />
      <Feedback chois={choisFeedback} />
    </PageWrapper>
  );
};

export default HomePage;
