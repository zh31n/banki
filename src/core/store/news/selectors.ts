import {NewsInterface} from "@/core/services/News";
import {InvestingNewsInterface} from "@/core/services/Investing";

export const NewsListSelector = (state): NewsInterface[] => {
    return state.news.list;
}

export const InvestingNewsListSelector = (state): InvestingNewsInterface[] => {
    return state.news.list;
}