import {Metadata} from "next";
import SpecialIpotekaOfffersPage from "@/screens/SpecialIpotekaOfffersPage/SpecialIpotekaOfffersPage";
import data from "@/core/data";

export const metadata: Metadata = {
  title: 'Специальные предложения',
}

export default function SpecialOffers() {
  return <SpecialIpotekaOfffersPage data={data.SpecialOffersCards} />
}