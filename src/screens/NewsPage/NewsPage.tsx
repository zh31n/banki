import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/NewsPage/components/Navigation/Navigation";
import News from "@/screens/NewsPage/components/News/News";
import {NewsInterface} from "@/core/api/News";
import React from "react";


interface NewsPageProps {
    news: NewsInterface[];
}

export default function NewsPage(props: NewsPageProps) {
    const {
        news,
    } = props;

    return <Wrapper>
        <Navigation />
        <News news={news} />
    </Wrapper>
}