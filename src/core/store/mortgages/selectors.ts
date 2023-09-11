import {MortgageInterface} from "@/core/services/Mortgages";

export const MortgagesListSelector = (state): MortgageInterface[] => {
    return state.mortgages.list;
}