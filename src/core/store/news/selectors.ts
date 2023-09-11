import {NewsInterface} from "@/core/services/News";

export const NewsListSelector = (state): NewsInterface[] => {
    return state.news.list;
}