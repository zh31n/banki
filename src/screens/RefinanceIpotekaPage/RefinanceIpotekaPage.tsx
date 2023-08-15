import Wrapper from "@/containers/Wrapper";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import Navigation from "@/screens/RefinanceIpotekaPage/components/Navigation/Navigation";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";
import Question from "@/screens/RefinanceIpotekaPage/components/Question/Question";
import Сompilations from "@/screens/RefinanceIpotekaPage/components/Сompilations/Сompilations";

export default function RefinanceIpotekaPage() {
  const dataMap = data.RefinanceIpotekaPage.questData
  return <Wrapper>
    <Navigation/>
    <Сompilations/>
    <Feedback title={'Отзывы'} sub={'об ипотеке'}/>
    <FrequentQuestions title={'Важная информация'} items={dataMap}/>
    <Question/>
  </Wrapper>
}