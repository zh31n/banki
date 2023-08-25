import {Metadata} from "next";
import DiscountIpotekaPage from "@/screens/DiscountIpotekaPage/DiscountIpotekaPage";

export const metadata: Metadata = {
    title: 'Кредитные карты с рассрочкой'
}

export default function DiscountIpoteka(){
    return <DiscountIpotekaPage />
}