import {CardInterface} from "@/core/services/Cards";

export const CardsSelector = (state): CardInterface[] => {
    return state.cards.list;
}