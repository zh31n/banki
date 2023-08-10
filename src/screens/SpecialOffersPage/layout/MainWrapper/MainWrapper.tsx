import React from "react";
import s from "./MainWrapper.module.scss";

type Props = {};

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={s.page_i}>{children}</div>;
};

export default MainWrapper;
