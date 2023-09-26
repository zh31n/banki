import React from 'react';
import HomePage from '@/screens/HomePage/HomePage';
import data from '@/core/data/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
};

export default function Home() {
  return <HomePage data={data.HomePage} />;
}
