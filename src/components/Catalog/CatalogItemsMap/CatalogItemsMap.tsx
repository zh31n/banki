import React from 'react';
import CatalogItem from "@/components/Catalog/CatalogItem/CatalogItem";

type catalogT = {
    name:string
    img:string
}
type Props = {
    items:catalogT[]
}

const CatalogItemsMap = ({items}:Props) => {
    return (
        <>
            {items.map((el, index) => <CatalogItem key={index} name={el.name} img={el.img}/>)}
        </>
    );
};

export default CatalogItemsMap;