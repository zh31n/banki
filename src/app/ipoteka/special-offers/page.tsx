import {Metadata} from "next";
import SpecialOffersIpotekaPage from "@/screens/SpecialOffersIpotekaPage/SpecialOffersIpotekaPage";

export const metadata: Metadata = {
  title: 'Специальные предложения',
}

export default function SpecialOffers() {
  return <SpecialOffersIpotekaPage/>
}