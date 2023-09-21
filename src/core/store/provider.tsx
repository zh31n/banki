"use client";

import React from "react";
import {Provider} from "react-redux";
import configureStore from "@/core/store/index";

const store = configureStore();
export type RootState = ReturnType<typeof store.getState>

export function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}

