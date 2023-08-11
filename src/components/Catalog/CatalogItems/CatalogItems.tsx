import React from 'react';
import s from './CatalogItems.module.scss';
import CatalogItemsMap from "@/components/Catalog/CatalogItemsMap/CatalogItemsMap";

type Props = {
    title: string
    items: object[]
}

const CatalogItems = ({title, items}: Props) => {
    return (
        <div className={s.catalog_items}>
            <div className={s.title}>{title}</div>
            <div className={s.items_cont}>
                <CatalogItemsMap items={items}/>
            </div>
        </div>
    );
};

export default CatalogItems;