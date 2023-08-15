import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/SpecialOffersIpotekaPage/components/Navigation/Navigation";
import OffersBanks from "@/screens/SpecialOffersIpotekaPage/components/OffersBanks/OffersBanks";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";

export default function SpecialOffersIpotekaPage() {
  const dataMap = data.SpecialOffersIpotekaPage.questData
  return <Wrapper>
    <Navigation/>
    <OffersBanks/>
    <FrequentQuestions title={'Частые вопросы'} items={dataMap}/>
  </Wrapper>
}