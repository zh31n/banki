import {Metadata} from "next";
import DebitCardsPage from "@/screens/DebetCardsPage/DebitCardsPage";

export const metadata: Metadata = {
    title: 'Дебетовые карты'
}

export default function DebitCards() {
    return <DebitCardsPage/>
}