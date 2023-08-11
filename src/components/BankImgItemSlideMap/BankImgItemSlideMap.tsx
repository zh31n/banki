import React from 'react';
import BankImgItemSlide from "@/components/BankImgItemSlide/BankImgItemSlide";

type Props = {
    images: string[]
}

const BankImgItemSlideMap = ({images}: Props) => {
    return (
        <>
            {images.map((el, index) => <BankImgItemSlide key={index} img={el}/>)}
        </>
    );
};

export default BankImgItemSlideMap;