import React from 'react';
import s from "./CatalogItem.module.scss";
import Image from "next/image";

const CatalogItem = ({name, img}) => {
    return (
        <div className={s.catalog_item}>
            <Image src={img} width={35} height={35}/>
            <span>{name}</span>
        </div>
    );
};

export default CatalogItem;