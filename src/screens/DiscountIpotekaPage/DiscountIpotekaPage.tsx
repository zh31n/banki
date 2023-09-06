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
import IntroMortgageDiscount
    from "@/screens/DiscountIpotekaPage/components/IntroMortgageDiscount/IntroMortgageDiscount";
import PageWrapper from "@/containers/PageWrapper";
import TopBanks from "@/components/TopBanks/TopBanks";
import OffersBanks from "@/components/Offers/OffersBanks/OffersBanks";

const DiscountIpotekaPage = () => {

    const dataMap = data.DiscountIpotekaPage.questData;
    const chooseItems  = data.MortgagePage.choises;
    const deposits = data.MortgageDiscount.deposits;
    return <PageWrapper>
        <IntroMortgageDiscount items={chooseItems}/>
        <Items />
        <Bonus />
        <OffersBanks deposits={deposits} sub={' предложения'}  title={'223'} options={['Ставка']}/>
        <OffersMonth />
        <Feedback title={'Отзывы '} sub={'об ипотеке'} />
        <FrequentQuestions title={'Важная информация'} items={dataMap} />
        <Question />
    </PageWrapper>
}
export default DiscountIpotekaPage;