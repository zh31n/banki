'use client';

import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/NewsPage/components/Navigation/Navigation';
import News from '@/screens/NewsPage/components/News/News';
import { NewsInterface } from '@/core/services/News';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsListSelector } from '@/core/store/news/selectors';
import { newsGetRequestedAction } from '@/core/store/news/actions';

export default function NewsPage() {
  const news: NewsInterface[] = useSelector(NewsListSelector);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState<string>('сегодня');
  useEffect(() => {
    dispatch(newsGetRequestedAction());
  }, []);

  return (
    <Wrapper>
      <Navigation setCurrent={setCurrent} current={current} />
      <News news={news} />
    </Wrapper>
  );
}
