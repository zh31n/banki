import React from 'react';
import { Metadata } from 'next';
import DepositsPage from '@/screens/DepositsPage/DepositsPage';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Вклады',
};

export default async function Deposits() {
  return <DepositsPage staticData={data.DepositsPage} />;
}
