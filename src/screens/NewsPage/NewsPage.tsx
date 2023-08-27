import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/NewsPage/components/Navigation/Navigation";
import News from "@/screens/NewsPage/components/News/News";

export default function NewsPage() {
    return <Wrapper>
        <Navigation />
        <News />
    </Wrapper>
}