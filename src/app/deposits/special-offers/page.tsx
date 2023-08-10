import {Metadata} from "next";
import SpecialOffersPage from "@/screens/SpecialOffersPage/SpecialOffersPage";

export const metadata: Metadata = {
    title: 'Специальные предложения',
}

const SpecialOffers = () => {
    return <SpecialOffersPage/>
};

export default SpecialOffers;