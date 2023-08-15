import {Metadata} from "next";
import InstallmentPage from "@/screens/InstallmentPage/InstallmentPage";

export const metadata: Metadata = {
    title: 'Кредитные карты с рассрочкой'
}

export default function Installment() {
    return <InstallmentPage/>
}