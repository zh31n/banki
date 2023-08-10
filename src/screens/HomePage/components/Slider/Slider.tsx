import React from "react";
import s from "./Slider.module.scss";
import arr from "@/assets/icons/white_arr.svg";
import osago from "@/assets/icons/osago.svg";
import credit from "@/assets/icons/credit.svg";
import carta from "@/assets/icons/carta.svg";
import vklad from "@/assets/icons/vklad.svg";
import zaymi from "@/assets/icons/zaymi.svg";
import invest from "@/assets/icons/invest.svg";
import ipoteka from "@/assets/icons/ipoteka.svg";
import Image from "next/image";
import SlideItem from "@/components/SlideItem/SlideItem";

type Props = {};

type iconsSlideT = {
  img: string;
  name: string;
  w: number;
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

const slideItems = iconsSlide.map((el, index) => (
  <SlideItem width={el.w} key={index} img={el.img} name={el.name} />
));

const Slider = (props: Props) => {
  return (
    <div className={s.slide}>
      {slideItems}
      <div className={s.arr}>
        <Image src={arr} alt={"arr"} />
      </div>
    </div>
  );
};

export default Slider;
