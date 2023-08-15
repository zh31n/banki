import CreditMapPage from "@/screens/CreditMapPage/CreditMapPage";
import {Metadata} from "next";

type Props = {
    params: {
        id: string;
    };
};

export const metadata: Metadata = {
    title: 'Кредитные карты'
}

export default function CreditMap() {
    return <CreditMapPage/>;
}
