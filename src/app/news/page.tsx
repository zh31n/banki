import {Metadata} from "next";
import NewsPage from "@/screens/NewsPage/NewsPage";
import {GET_NEWS, NewsInterface, NewsResponseInterface} from "@/core/api/News";
import React from "react";


export const metadata: Metadata = {
    title: 'Новости'
}

interface Data {
    news: NewsInterface[];
}

const getData = async (): Promise<Data> => {
    const news: NewsResponseInterface = (await GET_NEWS());

    return {
        news: news.cards,
    }
}

export default async function News() {
    const {
        news,
    } = await getData();

    return <NewsPage news={news} />
}