import React from "react";
import s from "./Search.module.scss";
import Image from "next/image";
import lupa from "@/assets/icons/search.svg";

type InpPropsT = {
  placeholder: string;
};

const Search = ({ placeholder }: InpPropsT) => {
  return (
    <div className={s.search}>
      <Image src={lupa} height={40} width={40} />
      <input type="text" placeholder={placeholder} />
      <button>Найти</button>
    </div>
  );
};

export default Search;
