import React from 'react';
import s from "./CatalogItem.module.scss";
import Image from "next/image";

type Props = {
  name: string
  img: string
}

const CatalogItem = ({name, img}: Props) => {
  return (
    <div className={s.catalog_item}>
      <Image alt={'catalog image'} src={img} width={35} height={35}/>
      <span>{name}</span>
    </div>
  );
};

export default CatalogItem;