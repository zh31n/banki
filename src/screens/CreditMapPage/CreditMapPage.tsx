import Wrapper from "@/containers/Wrapper";
import Navigation from "./components/Navigation/Navigation";
import Bonus from "../SavingAccountsPage/components/Bonus/Bonus";
import Offers from "./components/Offers/Offers";

export default function CreditMapPage() {
  return (
    <Wrapper>
      <Navigation />
      <Bonus />
      <Offers />
    </Wrapper>
  );
}
