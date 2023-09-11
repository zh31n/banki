"use client";

import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./index";

const store = configureStore();

export function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}