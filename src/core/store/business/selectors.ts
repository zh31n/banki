import {BusinessCardItemInterface, BusinessCreditItemInterface} from "@/core/services/Business";

export const BusinessCardsSelector = (state): BusinessCardItemInterface[] => {
    return state.business.cards;
}

export const BusinessCreditsSelector = (state): BusinessCreditItemInterface[] => {
    return state.business.credits;
}