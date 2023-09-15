import {CreditInterface} from "@/core/services/Credits";

export const CreditsSelector = (state): CreditInterface[] => {
    return state.credits.list;
}