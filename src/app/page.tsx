import React from 'react';
// import HomePage from '@/screens/HomePage/HomePage';
import data from '@/core/data/index';
import { Metadata } from 'next';
import { Loader } from '@/components/Loader';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/screens/HomePage/HomePage'), {
  ssr: false,
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  title: 'Главная',
};

export default function Home() {
  return <HomePage data={data.HomePage} />;
}
