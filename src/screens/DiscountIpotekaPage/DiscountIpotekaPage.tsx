import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/DiscountIpotekaPage/components/Navigation/Navigation";
import Bonus from "@/components/Bonus/Bonus";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import Question from "@/components/Question/Question";
import Banks from "@/components/Banks/Banks";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";
import Items from "@/screens/DiscountIpotekaPage/components/Items/Items";

export default function DiscountIpotekaPage(){

    const dataMap = data.DiscountIpotekaPage.questData

    return <Wrapper>
        <Navigation />
        <Items />
        <Bonus />
        <Banks />
        <OffersMonth />
        <Feedback title={'Отзывы '} sub={'об ипотеке'} />
        <FrequentQuestions title={'Важная информация'} items={dataMap} />
        <Question />
    </Wrapper>
}