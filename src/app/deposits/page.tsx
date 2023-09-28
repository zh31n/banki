import React from 'react';
import { Metadata } from 'next';
import data from '@/core/data/index';
import { Loader } from '@/components/Loader';
import dynamic from 'next/dynamic';

const DepositsPage = dynamic(() => import('@/screens/DepositsPage/DepositsPage'), {
  ssr: false,
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  title: 'Вклады',
};

export default async function Deposits() {
  return <DepositsPage staticData={data.DepositsPage} />;
}
