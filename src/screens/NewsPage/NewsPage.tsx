"use client";

import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/NewsPage/components/Navigation/Navigation";
import News from "@/screens/NewsPage/components/News/News";
import {NewsInterface} from "@/core/api/News";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NewsListSelector} from "@/core/store/news/selectors";
import {newsGetRequestedAction} from "@/core/store/news/actions";

export default function NewsPage() {
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsGetRequestedAction());
    }, [])

    return (
            <Wrapper>
                <Navigation />
                <News news={news} />
            </Wrapper>
    )
}