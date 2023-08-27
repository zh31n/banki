import Wrapper from "@/containers/Wrapper";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import LatestNews from "@/components/LatestNews/LatestNews";
import Navigation from "@/screens/BusinessPage/components/Navigation/Navigation";
import Kassa from "@/screens/BusinessPage/components/Kassa/Kassa";
import Ecvaring from "@/screens/BusinessPage/components/Ecvaring/Ecvaring";
import CreditForBank from "@/screens/BusinessPage/components/CreditForBank/CreditForBank";
import Text from "@/screens/BusinessPage/components/Text/Text";

export default function BusinessPage(){
    return <Wrapper>
        <Navigation />
        <Kassa />
        <CreditForBank />
        <Ecvaring />
        <Text />
        <OffersMonth />
        <LatestNews />
    </Wrapper>
}