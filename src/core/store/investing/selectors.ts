import {BrokerInterface, InvestingMarketInterface} from "@/core/services/Investing";

export const InvestingMarketsSelector = (state): InvestingMarketInterface[] => {
    return state.investing.markets;
}

export const InvestingBrokersSelector = (state): BrokerInterface[] => {
    return state.investing.brokers;
}