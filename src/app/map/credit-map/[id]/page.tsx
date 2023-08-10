import CreditMapPage from "@/screens/CreditMapPage/CreditMapPage";

type Props = {
  params: {
    id: string;
  };
};

export default function CreditMap({ params: { id } }: Props) {
  return <CreditMapPage />;
}
