import {Metadata} from "next";
import SpecialOffersPage from "@/screens/SpecialOffersPage/SpecialOffersPage";
import data from "@/core/data";

export const metadata: Metadata = {
    title: 'Специальные предложения',
}

const SpecialOffers = () => {
    return <SpecialOffersPage data={data.SpecialOffer}/>
};

export default SpecialOffers;