import MasterCardsPage from "@/screens/MasterCardsPage/MasterCardsPage";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Кредитные карты с рассрочкой'
}


export default function SelectCardsPage() {
  return <MasterCardsPage/>
}