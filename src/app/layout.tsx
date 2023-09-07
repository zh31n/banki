
import "./globals.scss";
import type {Metadata} from "next";
import Header from "@/components/Header/Header";
import React from "react";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

export const metadata: Metadata = {
    title: "Главная",
    description: "Главная страница банков",
};



function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="ru">
        <body>
        <Header/>
        <MobileHeader/>
        {children}
        </body>
        </html>
    );
}

RootLayout.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await RootLayout.getInitialProps(appContext);

    return { ...appProps };
};

export default RootLayout;