import {Metadata} from "next";
import NewsPage from "@/screens/NewsPage/NewsPage";


export const metadata: Metadata = {
    title: 'Новости'
}

export default function News(){
    return <NewsPage />
}