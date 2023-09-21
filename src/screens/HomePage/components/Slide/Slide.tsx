import React from 'react';
import s from './Slide.module.scss';
import arr from "@/assets/icons/white_arr.svg";
import SlideItem from "@/components/SlideItem/SlideItem";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

type iconsSlideT = {
    img: StaticImageData;
    name: string;
    w: number;
    link?:string
};
type Props = {
    data: iconsSlideT[]
}

const Slide = ({data}: Props) => {

    const slideItems = data.map((el, index) => (
        <Link href={el.link}>
            <SlideItem width={el.w} key={index} img={el.img} name={el.name}/>
        </Link>

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