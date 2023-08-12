import React from 'react';
import s from './Slide.module.scss';
import arr from "@/assets/icons/white_arr.svg";
import SlideItem from "@/components/SlideItem/SlideItem";
import Image from "next/image";

type iconsSlideT = {
    img: string;
    name: string;
    w: number;
};
type Props = {
    data: iconsSlideT[]
}

const Slide = ({data}: Props) => {

    const slideItems = data.map((el, index) => (
        <SlideItem width={el.w} key={index} img={el.img} name={el.name}/>
    ));

    return (
        <div className={s.slide}>
            {slideItems}
            <div className={s.arr}>
                <Image src={arr} alt={"arr"}/>
            </div>
        </div>
    );
};

export default Slide;