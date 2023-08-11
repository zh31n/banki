import React from 'react';
import CatalogItem from "@/components/Catalog/CatalogItem/CatalogItem";

const CatalogItemsMap = ({items}) => {
    return (
        <>
            {items.map((el, index) => <CatalogItem key={index} name={el.name} img={el.img}/>)}
        </>
    );
};

export default CatalogItemsMap;