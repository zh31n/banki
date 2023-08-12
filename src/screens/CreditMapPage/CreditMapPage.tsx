import Wrapper from "@/containers/Wrapper";
import Navigation from "./components/Navigation/Navigation";
import Bonus from "../../components/Bonus/Bonus";
import Offers from "./components/Offers/Offers";
import OffersMonth from "@/screens/CreditMapPage/components/OffersMonth/OffersMonth";
import Mailing from "@/components/Mailing/Mailing";

export default function CreditMapPage() {
    return (
        <Wrapper>
            <Navigation/>
            <Bonus/>
            <Offers/>
            <OffersMonth/>
            <Mailing/>
        </Wrapper>
    );
}
