'use client';

import React from 'react';
import s from './ChoiseItem.module.scss';
import Link from 'next/link';

type Props = {
  name: string;
  active: boolean;
  setActive?: React.Dispatch<React.SetStateAction<string>>;
  href?: string;
};

const ChoiseItem = ({ name, active, setActive, href }: Props) => {
  const setCurrentActive = () => {
    setActive && setActive(name);
  };

  return (
    <Link onClick={setCurrentActive} className={active ? s.item_active : s.item} href={href ? href : '#'}>
      {name}
    </Link>
  );
};

export default ChoiseItem;
