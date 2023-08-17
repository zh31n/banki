import SpecialCardsOffersPage from "@/screens/SpecialCardsOfffersPage/SpecialCardsOffersPage";
import {Metadata} from "next";
import data from "@/core/data";

export const metadata: Metadata = {
  title: 'Специальные предложения'
}

export default function Page() {
  return <SpecialCardsOffersPage data={data.SpecialOffersCards}/>
}