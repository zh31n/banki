// import CreditMapPage from "@/screens/CreditMapPage/CreditMapPage";
import { Loader } from '@/components/Loader';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const CreditMapPage = dynamic(() => import('@/screens/CreditMapPage/CreditMapPage'), {
  ssr: false,
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  title: 'Кредитные карты',
};

export default async function CreditMap() {
  return <CreditMapPage />;
}
