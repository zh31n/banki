import './globals.css'
import type {Metadata} from 'next'
import Header from "@/Components/Header/Header";

export const metadata: Metadata = {
    title: 'Главная',
    description: 'Главная страница банков',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <Header/>
                {children}
            </body>
        </html>
    )
}
