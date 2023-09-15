import {DepositCardInterface} from "@/core/services/Deposits";

export const DepositsSelector = (state): DepositCardInterface[] => {
    return state.deposits.list;
}