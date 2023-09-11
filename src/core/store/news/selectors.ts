import {NewsInterface} from "@/core/api/News";

export const NewsListSelector = (state): NewsInterface[] => {
    return state.news.list;
}